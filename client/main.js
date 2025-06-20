import { 
    uzzang, 
    delayP, 
    getNode, 
    END_POINT, 
    changeColor,
    renderSpinner,
    renderUserCard, 
    renderEmptySvg,
    clearContents,
} from './lib/index.js'


const userCardInner = getNode('.user-card-inner')
async function renderUserList(){    
    
    renderSpinner(userCardInner);
    
    await delayP(2000);
    
    try{
        const {data} = await uzzang.get(END_POINT);

        
        
        gsap.to('.loadingSpinner',{
            opacity:0,
            duration:1,
            onComplete(){ 
                // 애니메이션 종료시점 알려줌
                console.log('animation finish');
                
                // 로딩 애니메이션 지우기 ver2.
                // this = twin
                // twin.targets[0] = .loadingSpinner
                console.log(this._targets[0]);
                this._targets[0].remove()
                
                // 로딩 애니메이션 지우기 ver1.
                // getNode('.loadingSpinner').remove();
                
                data.forEach((user) => renderUserCard(userCardInner,user));
                changeColor('.user-card');


                // 카드 등장 애니메이션
                gsap.from('.user-card',{
                    opacity:0,
                    stagger:0.1,
                    x:-30,
                })
            }
        })

    
    }   
    catch 
    {
        gsap.to('.loadingSpinner',{
            opacity:0,
            duration:1,
            onComplete(){ 
                console.log(this._targets[0]);
                console.error('error!');
                this._targets[0].remove()
                renderEmptySvg(userCardInner);
                }
            }
        )
    }
}

renderUserList();





// 클릭할 곳 처리할게 너무 많다? => 이벤트 위임 사용해라
function handleDelete(e){
    e.preventDefault();

    const button = e.target.closest('button');
    
    if(!button) return;

    const id = button.dataset.value;

    
    // 삭제 수행됐다고 뜨지만
    // 데이터 api에서 빌려쓰고있기 때문에 실제로 지워지지는 않는다
    uzzang.delete(`${END_POINT}/${id}`)
    .then(()=>{
        alert('삭제가 완료됐습니다!');
        clearContents(userCardInner);
        renderUserList();
    })
    
}

userCardInner.addEventListener('click', handleDelete)


const createButton = getNode('.create');
const cancelButton = getNode('.create .cancel');
const doneButton = getNode('.create .done');

function handleCreate(){

    console.log('clicked');
    const pop = getNode('.create .pop');
    // pop.style.opacity = 1;
    // pop.style.visibility = 'initial';
    
    gsap.to(pop,{
        // 자연스럽게 pop이 나타나게 해줌
        // opacity도 1로 만들고 visibility도 초기상태로 해줌
        autoAlpha:1  
    })

}

function handleCancel(e){
    e.stopPropagation()
    gsap.to('.pop',{ autoAlpha:0 })
}

function handleDone(e){
    e.stopPropagation()
    // POST 통신
    // 내용 가져오기
    const name = getNode('#nameField').value;
    const email = getNode('#emailField').value;
    const website = getNode('#siteField').value;

    uzzang.post(END_POINT,{name,email,website})
    .then(()=>{
        gsap.to('.pop',{autoAlpha:0});
        clearContents(userCardInner);
        renderUserList();

        getNode('#nameField').value = '';
        getNode('#emailField').value = '';
        getNode('#siteField').value = '';
    })
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click',handleCancel);
doneButton.addEventListener('click',handleDone);


// ===================== 회원등록 ===============================

const registerButton = getNode('.register');
const registerCancelButton = getNode('.register .cancel');
const registerDoneButton = getNode('.register .done');



function handleRegister(){
  gsap.to('.register .pop',{autoAlpha:1})
}

function handleRegisterCancel(e){
  e.stopPropagation();
  gsap.to('.register .pop',{autoAlpha:0})
}

function handleRegisterCreate(e){
    e.preventDefault();
    const name = getNode('#create-name').value;
    const password = getNode('#create-password').value;

    uzzang.post('http://localhost:3000/register',{
        email:name,
        password:password
    })
}

registerButton.addEventListener('click',handleRegister);
registerCancelButton.addEventListener('click',handleRegisterCancel);
registerDoneButton.addEventListener('click',handleRegisterCreate);



// ========================== 로그인 확인 =======================

const isLogin = await uzzang.post('http://localhost:3000/login',{
    email:'test2@123.com',
    password:'12345678'
})
console.log(isLogin.data);
