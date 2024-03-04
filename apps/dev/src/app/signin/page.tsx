import { SignIn } from "@stackframe/stack";
import { stackServerApp } from "src/stack";
import CustomCredentialSignIn from "./custom-credential";
import CustomOAuthSignIn from "./custom-oauth";

export default function Page() {
  return <SignIn fullPage redirectUrl={stackServerApp.urls.home} />;
}