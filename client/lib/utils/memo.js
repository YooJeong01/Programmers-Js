
export const memo = (() => {
    const cache = {};

    return (key, fn) => {
        // getter
        // 캐시의 해당 키의 저장된 value를 반환해라
        if(!fn) return cache[key];

        //setter
        // 캐시의 키에 함수 실행 결과를 넣어라   
        if(cache[key]){
            console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);

            if(confirm('덮어쓰기 할래?')){
                // const history = cache[key];
                // cache[key] = fn();
                // const current = cache[key];
            }
        }
        cache[key] = fn();
    }

})()


// setter
// @param1 : key
// @param2 : value
memo('cube', ()=>document.querySelector('#cube'));
// console.log(memo('cube'));


memo('say', ()=>'hello');


// getter
// @param1 : key
// @return : element
memo('cube') // #cube