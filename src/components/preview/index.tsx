import { createSignal, onMount, onCleanup } from 'solid-js';
import MarkdownIt from 'markdown-it';
import mdKatex from 'markdown-it-katex';
import mdHighlight from 'markdown-it-highlightjs';

const Preview = (props) => {
  const [content, setContent] = createSignal('');
  onMount(() => {
    const md = MarkdownIt({
      linkify: true,
      breaks: true,
      html: true,
    })
      .use(mdKatex)
      .use(mdHighlight);

    const updateContent = (e: CustomEvent) => {
      console.log(
        '%c [ xxx ]',
        'font-size:13px; background:pink; color:#bf2c9f;',
        e.detail
      );
      setContent(md.render(e.detail));
    };
    window.addEventListener('editor-change', updateContent);
    onCleanup(() => {
      window.removeEventListener('editor-change', updateContent);
    });
  });
  return <div class="w-50% markdown-body" innerHTML={content()}></div>;
};

export default Preview;
