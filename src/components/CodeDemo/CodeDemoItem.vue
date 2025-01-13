<script setup lang="ts">
import 'highlight.js/styles/atom-one-dark.min.css';
import hljs from 'highlight.js/lib/core';
import tsLanguage from 'highlight.js/lib/languages/typescript';
import jsLanguage from 'highlight.js/lib/languages/javascript';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import cssLanguage from 'highlight.js/lib/languages/css';
hljs.registerLanguage('typescript', tsLanguage);
hljs.registerLanguage('javascript', jsLanguage);
hljs.registerLanguage('xml', xmlLanguage);
hljs.registerLanguage('css', cssLanguage);

const { codeData, codePath } = defineProps({
  codeData: {
    required: false,
    type: String,
  },
  codePath: {
    required: false,
    type: String,
  },
});

const unHtmlEntities: { [key: string]: string } = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&#39;": "'",
  "&quot;": '"',
  "&grave;": "`",
  "&#94;": "^",
  "&#126;": "~",
  "&mdash;": "—",
  "&bull;": "•",
  "&ndash;": "–",
  "&#63;": "?",
  "&#58;": ":",
  "&#36;": "$",
};

const unescapeHtml = (str: string) => {
  if (!str) return '';
  return str?.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;|&grave;|&circ;|&tilde;|&mdash;|&bull;|&ndash;|&#63;|&#58;|&#36;/g,
    (tag) => unHtmlEntities[tag] || tag,
  );
};

const renderCode = unescapeHtml(codeData);
</script>

<template>
  <div class="code-domo">
    <!-- <div class="title">{{ codePath }}</div> -->
    <div class="content">
      <highlightjs language="tsx" :code="renderCode" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-domo {
  margin-top: 24px;

  pre {
    margin: 0;
  }


  .title {
    color: #888;
    margin-bottom: 4px;
  }

  .content {
    border-radius: 8px;
    overflow: hidden;

    code {
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>