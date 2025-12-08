// routes/searchRouter.js （SEARCH）
var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//POSTされているキーワードを受け取る
router.post("/", async (req, res) => {
  const keyword = req.body.keyword;

  const blogs = await prisma.blog.findMany({
    where: {
      OR: [
        { title: { contains: keyword }},  //Prisma で title / content に「部分一致検索」を実行
        { content: { contains: keyword }},
      ]
    }
  });

  res.render("search", { blogs, keyword }); //検索結果ページを表示
});

module.exports = router;
