import { createSignal, onMount, onCleanup } from 'solid-js';

const Header = (props) => {
  return (
    <header class="dark:bg-solid-darkbg border-b-2px sticky top-0 z-10 flex items-center gap-x-4 border-slate-200 bg-white p-1 px-2 text-sm dark:border-neutral-800">
      <div>logo</div>
      <div class="ml-auto md:flex md:flex-row md:items-center md:space-x-2 hidden">
        <div
          style="position:fixed;top:0;left:0;outline:none;pointer-events:none;width:0;height:0;"
          aria-hidden="true"
          tabindex="-1"
        ></div>
        <button
          type="button"
          class="flex flex-row items-center space-x-2 rounded px-2 py-2 opacity-80 hover:opacity-100 md:px-1"
          title="Toggle dark mode"
        >
          <i class="i-carbon:moon text-24px"></i>
          <span class="text-xs md:sr-only">Dark mode</span>
        </button>
        <button
          type="button"
          class="flex flex-row items-center space-x-2 rounded px-2 py-2 opacity-80 hover:opacity-100 md:px-1"
          title="Export to Zip"
        >
          <i class="i-carbon:download text-24px"></i>
          <span class="text-xs md:sr-only">Export to Zip</span>
        </button>
        <button
          type="button"
          class="flex flex-row items-center space-x-2 rounded px-2 py-2 md:px-1 opacity-80 hover:opacity-100"
          title="Share with a minified link"
        >
          <i class="i-carbon:fit-to-screen text-24px"></i>
          <span class="text-xs md:sr-only">Full screen</span>
        </button>

        <a
          href="https://github.com/phy-lei/markdown-online"
          target="_blank"
          class="flex cursor-alias flex-row items-center space-x-2 rounded px-2 py-2 opacity-80 hover:opacity-100 md:px-1"
          title="Github"
        >
          <i class="i-carbon:logo-github text-24px"></i>
          <span class="text-xs md:sr-only">Github</span>
        </a>
        <div
          style="position:fixed;top:0;left:0;outline:none;pointer-events:none;width:0;height:0;"
          aria-hidden="true"
          tabindex="-1"
        ></div>
      </div>
    </header>
  );
};

export default Header;
