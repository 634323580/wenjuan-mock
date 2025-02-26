const Mock = require("mockjs");

function getQuestionList(opt = {}) {
  const { len = 10, isDeleted = false, isStar = false } = opt;
  const data = Mock.mock({
    [`list|${len}`]: [
      {
        _id: "@id",
        title: "@ctitle",
        isPublished: "@boolean",
        isStar: !!isStar || "@boolean",
        answerCount: "@integer(50, 100)",
        createdAt: "@datetime",
        isDeleted: !!isDeleted,
      },
    ],
  });
  return Array.isArray(data.list) ? data.list : [data.list];
}

module.exports = getQuestionList;
