
function insertBefore(node, content){
    if(isString(node)) node = getNode(node);
    node.insertAdjacentHTML('beforebegin',content);
}
function insertFirst(node, content){
    if(isString(node)) node = getNode(node);
    node.insertAdjacentHTML('afterbegin',content);
}
function insertLast(node, content){
    if(isString(node)) node = getNode(node);
    node.insertAdjacentHTML('beforeend',content);
}
function insertAfter(node, content){
    if(isString(node)) node = getNode(node);
    node.insertAdjacentHTML('afterend',content);
}