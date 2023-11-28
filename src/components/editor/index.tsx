import { createSignal, onMount } from 'solid-js';

const Editor = (props) => {
  onMount(() => {
    console.log(
      '%c [ xxx ]',
      'font-size:13px; background:pink; color:#bf2c9f;',
      (window as any).mEditor
    );
  });
  return null;
};

export default Editor;
