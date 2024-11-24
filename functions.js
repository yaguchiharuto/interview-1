// .chapterクラスを持つ要素をすべて取得
const chapters = document.querySelectorAll('.chapter');

// 取得した各要素に対してアニメーションを適用
chapters.forEach((content) => {
  gsap.fromTo(
    content, // アニメーションを適用する要素
    {autoAlpha: 0, y: 50}, // アニメーション開始時の状態（透明度0、y方向に50px下にずらす）
    {
      duration: 2, // アニメーションの時間（秒）
      autoAlpha: 1, // アニメーション終了時の透明度（1で完全に不透明）
      y: 0, // アニメーション終了時のy方向の位置（0でオリジナルの位置）
      ease: 'power2.out', // イージングの種類（power2.outで終わりに向けて徐々にスピードが落ちる）
      scrollTrigger: {
        trigger: content, // スクロールのトリガーとなる要素
        start: 'top 100%', // アニメーションが開始するスクロール位置（チャプター要素の上端が画面の80%の位置に来たら開始）
        toggleActions: 'play none none none', // スクロールによるアニメーションの動作（playで再生、noneで何もしない,https://codepen.io/GreenSock/pen/LYVKWGoを参照）
        once: false, // アニメーションを一度だけ実行
        
      },
      stagger: 0.2,
    }
  );
});
