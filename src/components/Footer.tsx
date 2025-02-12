import { GithubIcon } from 'lucide-react';

function Footer() {
  return (
    <a
      target="_blank"
      href="https://github.com/develad"
      className="mt-auto flex flex-row-reverse items-center justify-center text-sm font-bold gap-2 underline underline-offset-2"
    >
      <p>ELAD BAR</p>
      <GithubIcon className="w-6 h-6 animate-bounce" />
      <span>{new Date().getFullYear()}</span>
    </a>
  );
}

export default Footer;
