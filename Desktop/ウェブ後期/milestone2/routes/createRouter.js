// routes/createRouter.js  ← CREATE（新規投稿）担当

var express = require("express");
var router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// CREATE: 新しいブログ投稿　prismaでデータベースに追加
router.post("/", async (req, res) => {
  await prisma.blog.create({
    data: {
      title: req.body.title,
      date: req.body.date,
      content: req.body.content
    }
  });

  res.redirect("/");
});

module.exports = router;
