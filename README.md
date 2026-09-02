# Task10

`my-task-front-rep` の Task10 を単体で動かせるように切り出した、独立した React プロジェクトです。

## 使い方

このフォルダを開いて、ターミナルで次の順に実行してください。

```bash
npm install
```

```bash
npm start
```

ブラウザで [http://localhost:3000](http://localhost:3000) が開き、Task10 のページが表示されます。

## フォルダ構成

```
task10/
├── public/                     … HTML やアイコンなどの静的ファイル
└── src/
    ├── App.tsx                 … Task10 を表示するだけのルート
    ├── index.tsx               … アプリの入口
    ├── task10/
    │   └── Task10.tsx          … ページ本体
    └── images/
        └── task10Images/       … Task10 で使う画像一式
```

## メモ

- 元の `my-task-front-rep` にあった Task10 はそのまま残しています。こちらはコピーして独立させたものです。
- 画面表示に使うライブラリ（MUI）だけに絞っているため、元リポジトリより軽量です。
