const Mock = require("mockjs");
const getQuestionList = require("./data/getQuestionList");
const Random = Mock.Random;

module.exports = [
  // 获取单个问卷新信息
  {
    url: "/api/question/:id",
    method: "get",
    response: () => {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        },
      };
    },
  },
  // 创建问卷
  {
    url: "/api/question",
    method: "post",
    response: () => {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  // 获取查询问卷列表
  {
    url: "/api/question",
    method: "get",
    response: (ctx) => {
      const query = ctx.query;
      const isDeleted = query.isDeleted;
      const isStar = query.isStar;
      const pageSize = parseInt(query.pageSize) || 10;
      return {
        errno: 0,
        data: {
          list: getQuestionList({ isDeleted, isStar, len: pageSize }),
          total: 100,
        },
      };
    },
  },
  // 更新问卷
  {
    url: "/api/question/:id",
    method: "patch",
    response: () => {
      return {
        errno: 0,
      };
    },
  },
  // 复制问卷
  {
    url: "/api/question/duplicate/:id",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  // 删除问卷
  {
    url: "/api/question",
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
