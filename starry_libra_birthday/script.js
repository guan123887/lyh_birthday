'use strict';
const cfg=window.BIRTHDAY_CONFIG||{};
document.querySelectorAll('[data-name]').forEach(el=>{el.textContent=cfg.name||'亲爱的你'});
document.querySelectorAll('[data-from]').forEach(el=>{el.textContent=cfg.from||'送你星光的人'});
document.querySelectorAll('[data-birthday]').forEach(el=>{el.textContent=cfg.birthday||'你的生日'});
document.querySelectorAll('[data-wish]').forEach(el=>{el.textContent=cfg.wish||'愿你永远闪闪发光。'});
document.querySelectorAll('[data-surprise]').forEach(el=>{el.textContent=cfg.surprise||'生日快乐！'});

// 每次加载绘制散落的星星；无需图片 CDN 或其他依赖。
const sky=document.querySelector('.sky-stars');
if(sky){
  let seed=2347;
  const random=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646};
  const count=window.matchMedia('(max-width:720px)').matches?76:125;
  for(let i=0;i<count;i++){
    const s=document.createElement('span'); s.className='star';
    const size=(random()*2.2+.7).toFixed(2);
    Object.assign(s.style,{
      width:size+'px',height:size+'px',left:(random()*100).toFixed(2)+'%',
      top:(random()*100).toFixed(2)+'%', '--duration':(random()*5+2.3).toFixed(1)+'s',
      '--delay':(random()*-8).toFixed(1)+'s'
    }); sky.appendChild(s);
  }
}
const blessings=[
 '愿今天的风都温柔，愿今晚的星星都偏爱你。',
 '愿你不必讨好世界，也能被世界温柔拥抱。',
 '愿你的每一次选择，都通往让自己幸福的方向。',
 '愿你的生活有鲜花，有晚霞，也有永远不缺席的快乐。',
 '愿天秤的优雅与浪漫，陪你走过闪闪发光的一岁。'
];
let wishIndex=0;
document.querySelectorAll('[data-wish-button]').forEach(button=>{
  button.addEventListener('click',()=>{
    const target=document.getElementById(button.dataset.target||'wishMessage');
    if(target){target.textContent=blessings[wishIndex%blessings.length];wishIndex++}
    button.textContent='✦ 再点亮一颗星';
  });
});
// 浏览器原生对话框：礼物打开与图片灯箱。
const giftDialog=document.getElementById('giftDialog');
document.getElementById('openGift')?.addEventListener('click',()=>giftDialog?.showModal());
const photoDialog=document.getElementById('photoDialog');
const largePhoto=document.getElementById('largePhoto');
const photoCaption=document.getElementById('photoCaption');
document.querySelectorAll('[data-photo]').forEach(button=>{
  button.addEventListener('click',()=>{
    const thumb=button.querySelector('img');
    if(!photoDialog||!thumb||!largePhoto)return;
    largePhoto.src=thumb.getAttribute('src');largePhoto.alt=thumb.alt;
    if(photoCaption)photoCaption.textContent=button.dataset.caption||thumb.alt;
    photoDialog.showModal();
  });
});
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',(event)=>{if(event.target===dialog)dialog.close()});
});
