const toolbar = $('#toolbar'),
      toolBarContainer = $('.toolbar__container'),
      flashCards = $$('.toolbar__flash-card'),
      flashCard = $('.toolbar__flash-card'),
      header = $('#header');

const toolBar = {
    flashCardCheck : 1,
    opening: 0,
    itemsList : [
        {
            name:'Kamperen',
            id: '0',
            type: 'travel & hotel',
            price: '75',
            path: '',
            image: '',
        },
        {
            name:'Augustine',
            id: '1',
            type: 'travel & hotel',
            price: '79',
            path: '',
            image: '',
        },
        {
            name:'Allogio',
            id: '2',
            type: 'travel & hotel',
            price: '75',
            path: '',
            image: '',
        },
        {
            name:'Iver',
            id: '3',
            type: 'travel & hotel',
            price: '79',
            path: '',
            image: '',
        },
        {
            name:'Bonvoyage',
            id: '4',
            type: 'travel & hotel',
            price: '69',
            path: '',
            image: '',
        },
        {
            name:'Wanderers',
            id: '5',
            type: 'travel & hotel',
            price: '75',
            path: '',
            image: '',
        },
        {
            name:'Klippe',
            id: '6',
            type: 'travel & hotel',
            price: '69',
            path: '',
            image: '',
        },
        {
            name:'FiveStar',
            id: '7',
            type: 'travel & hotel',
            price: '69',
            path: '',
            image: '',
        },
        {
            name:'Albergo',
            id: '8',
            type: 'travel & hotel',
            price: '75',
            path: '',
            image: '',
        },
        {
            name:'GateWay',
            id: '9',
            type: 'travel & hotel',
            price: '75',
            path: '',
            image: '',
        },
        {
            name:'Roam',
            id: '10',
            type: 'travel & hotel',
            price: '79',
            path: '',
            image: '',
        },
        {
            name:'GoTravel',
            id: '11',
            type: 'travel & hotel',
            price: '75',
            path: '',
            image: '',
        },
        {
            name:'Voyage',
            id: '12',
            type: 'travel & hotel',
            price: '69',
            path: '',
            image: '',
        },
    ],
    render: function() {
        const html = this.itemsList.map((item, index)=>{
            return `
                <a href="" class="toolbar__item">
                    <img src="./assets/img/toolbar/item${item.id}.png" alt="" class="w-100 toolbar__item--wrapper">
    
                    <span class="toolbar__item--name cap">${item.name}</span>
                    <p class="toolbar__item--name flex-between">
                        <span class="toolbar__item--type upper">${item.type}</span>
                        <span class="toolbar__item--price">$ ${item.price}</span>
                    </p>
                </a>
            `
        })
        toolBarContainer.innerHTML += html.join('\n');
    },
    handleEvents : function() {
        const _this=this;

        window.addEventListener('scroll', function(){
            if ((window.scrollY > header.offsetHeight) && _this.flashCardCheck){
                _this.flashCardCheck = 0;
                _this.collapse();
            }
        })

        window.addEventListener('click', ()=>{
            if (_this.opening)
                toolbar.classList.remove('open');
        })

        flashCard.addEventListener("click", (e)=>{
            e.stopPropagation();
            if (!_this.opening){
                _this.collapse();
                toolbar.classList.add('open');
            }
            else {
                toolbar.classList.remove('open');
                _this.grow();
                _this.flashCardCheck = 1;
            }
            _this.opening = !_this.opening;
        })
    },
    collapse : function(){
        flashCards.forEach((card)=>{
            card.style.right = "calc(100% - 63px)";
        })
    },
    grow : function(){
        flashCards.forEach((card)=>{
            card.style.right = "calc(100%)";
        })
    },
    
    run : function() {
        this.render();
        this.handleEvents();
    },
}

toolBar.run();