// routes/indexRouter.js  ← READ 担当

var express = require("express");
var router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// READ: ブログ一覧ページ
router.get("/", async (req, res) => {   //"/"(localhost:3000/)にアクセスしたとき
  const blogs = await prisma.blog.findMany({    //テーブルから全ての行を取得
    orderBy: { id: "desc" }   //投稿を新しい順に並べる（descがそれに該当）
  });

  res.render("index", { blogs });     //index.ejsにデータを渡す
});

module.exports = router;
