"use client";

import React, { useState, useEffect, useRef } from 'react';

const BlockMain = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const canvasRef = useRef(null);
  const gameRef = useRef({
    ball: {
      x: 0,
      y: 0,
      radius: 10,
      dx: 2,
      dy: -2,
    },
    paddle: {
      height: 10,
      width: 75,
      x: 0,
    },
    blocks: [], // ブロックを管理する配列
  });

  const startTimeRef = useRef(null);
  const gameStartedRef = useRef(false); // ゲームの開始フラグ

  // ボールを描画
  const drawBall = (ctx, ball) => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#2f70c1";
    ctx.fill();
    ctx.closePath();
  };

  // パドルを描画
  const drawPaddle = (ctx, paddle, canvas) => {
    ctx.beginPath();
    ctx.rect(paddle.x, canvas.height - paddle.height, paddle.width, paddle.height);
    ctx.fillStyle = "#2f70c1";
    ctx.fill();
    ctx.closePath();
  };

  // ブロックを描画
  const drawBlocks = (ctx, blocks) => {
    blocks.forEach((block) => {
      if (!block.isDestroyed) {
        ctx.beginPath();
        ctx.rect(block.x, block.y, block.width, block.height);
        ctx.fillStyle = "#2f70c1";
        ctx.fill();
        ctx.closePath();
      }
    });
  };

  // ゲームのアニメーション（ボールの動き、衝突判定など）
  const draw = () => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  const { ball, paddle, blocks } = gameRef.current;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(ctx, ball);
  drawPaddle(ctx, paddle, canvas);
  drawBlocks(ctx, blocks);

  // ボールが左右の壁に当たった場合の反射角度を変更
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }

  // ボールが上の壁に当たった場合の反射角度を変更
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
  // パドルに当たった場合
  if (
    ball.x > paddle.x &&
    ball.x < paddle.x + paddle.width
  ) {
    // パドルの中央に対するボールの相対的な位置を計算
    const relativePosition = (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);

    // 反射角度を計算
    const reflectionAngle = relativePosition * Math.PI / 4;

    // ボールの速度を増加
    const speedMultiplier = 1;

    // ボールの速度を変更し、速度の向きを維持
    const speed = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy) * speedMultiplier;
    ball.dx = Math.sin(reflectionAngle) * speed;
    ball.dy = -Math.cos(reflectionAngle) * speed;
  } else {
    // ゲームオーバーの処理
    alert('GAME OVER');
    document.location.reload();
    return;
  }

  }

  // ブロックとの当たり判定
  let allBlocksDestroyed = true; // すべてのブロックが破壊されたかどうかのフラグ
  blocks.forEach((block) => {
    if (!block.isDestroyed) {
      allBlocksDestroyed = false; // まだ破壊されていないブロックがある
      if (ball.x > block.x && ball.x < block.x + block.width && ball.y > block.y && ball.y < block.y + block.height) {
        ball.dy = -ball.dy;
        block.isDestroyed = true;
      }
    }
  });

  

  if (allBlocksDestroyed) {
    // すべてのブロックが破壊された場合、ゲームクリアの処理
    const endTime = new Date();
    const timeDiff = endTime - startTimeRef.current;
    const seconds = Math.floor(timeDiff / 1000);

    alert(`ゲームクリア！\nクリアにかかった時間：${seconds}秒`);

    document.location.reload();
    return;
  }


  ball.x += ball.dx;
  ball.y += ball.dy;

  requestAnimationFrame(draw);
};

  // マウスの位置に応じてパドルの位置を更新
  const moveHandler = (e) => {
    const canvas = canvasRef.current;
    const { paddle } = gameRef.current;
    let relativeX;
    if (e.type === 'touchmove') {
      e.preventDefault(); // タッチのデフォルト動作を停止
      relativeX = e.touches[0].clientX - canvas.offsetLeft;
    } else {
      relativeX = e.clientX - canvas.offsetLeft;
    }
    if (relativeX > 0 && relativeX < canvas.width) {
      paddle.x = relativeX - paddle.width / 2;
    }
  };


  // useEffect 内の ball.x, ball.y の初期化部分
  useEffect(() => {
    const canvas = canvasRef.current;
    const { ball, paddle } = gameRef.current;

    // ボールの初期位置をランダムに設定
    ball.x = Math.random() * (canvas.width - 3 * ball.radius) + ball.radius;
    ball.y = Math.random() * (canvas.height - 3 * ball.radius) + ball.radius;

    ball.dx = 4; // X方向の速度
    ball.dy = -4; // y方向の速度

    paddle.x = (canvas.width - paddle.width) / 2;

    // ブロックの初期化
    const blockRowCount = 3;
    const blockColumnCount = 5;
    for (let c = 0; c < blockColumnCount; c++) {
      for (let r = 0; r < blockRowCount; r++) {
        gameRef.current.blocks.push({
          x: c * (75 + 10),
          y: r * (20 + 10),
          width: 75,
          height: 20,
          isDestroyed: false,
        });
      }
    }

  canvas.addEventListener("mousemove", moveHandler);
  canvas.addEventListener("touchmove", moveHandler);

  return () => {
    canvas.removeEventListener("mousemove", moveHandler);
    canvas.removeEventListener("touchmove", moveHandler);
    };
  }, []);

  const startGame = () => {
    if (!gameStartedRef.current) {
      gameStartedRef.current = true;
      startTimeRef.current = new Date();
      setIsRunning(true);
      draw();
    }
  };

  // 経過時間の測定
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <div className='main-content'>
      <p>経過時間: {elapsedTime}秒</p>
      <canvas ref={canvasRef} width={410} height={250} style={{ border: '1px solid #000' }} />
      <div className='start-button'>
        <button onClick={startGame}>ゲームスタート</button>
      </div>
    </div>
  );
};

export default BlockMain;