class LuiToolTip {
    constructor(){
        const _tooltipDom = document.createElement('div');
        _tooltipDom.setAttribute('class','lui-tooltip-wrapper');
        _tooltipDom.innerHTML = `<span class="lui-tooltip-content">hello world</span>`;
        document.documentElement.appendChild(_tooltipDom);
        this.timer = null;
    }
    showToolTip(_event,content){
        this.timer = null;
        const target = _event?_event.target:new Error('please input event target!');
        const boundingClientRect = target.getBoundingClientRect();
        const top = document.documentElement.scrollTop + boundingClientRect.top-target.clientHeight/2+3 + 'px';
        const left =  document.documentElement.scrollLeft + boundingClientRect.left + target.clientWidth+14+'px';
        const tipDom = document.getElementsByClassName('lui-tooltip-wrapper')[0];
        document.getElementsByClassName('lui-tooltip-content')[0].innerHTML = content;
        tipDom.setAttribute('style',`left:${left};top:${top};`);
        tipDom.setAttribute('style',tipDom.getAttribute('style')+'display:block;');
        function leaveFn(){
            const styleArr = tipDom.getAttribute('style').split(';');
            styleArr[styleArr.length-1] = 'display:none;';
            tipDom.setAttribute('style',styleArr.join(';'));
            target.removeEventListener('mouseleave',leaveFn);
        }
        target.addEventListener('mouseleave',leaveFn,false);
    }
}