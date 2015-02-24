module.exports = {
  pattern: /(?!@debug|@import|@media|@keyframes|@font-face|@include|@extend|@mixin|@-\w)@/gi,
  replacement: '$',
  order: 0
};
