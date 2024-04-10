import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordconfirm, setPasswordConfirm] = useState<string>("");

  return (
    <form action="/post" method="POST" className="form form--lg">
      <h1 className="form_title">회원가입</h1>
      <div className="form_block">
        <label htmlFor="title">이메일</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="form_block">
        <label htmlFor="password">비밀번호</label>
        <input type="text" name="summary" id="summary" required />
      </div>
      <div className="form_block">
        <label htmlFor="password_confirm">비밀번호 확인</label>
        <input
          type="password"
          name="password_confirm"
          id="password_confirm"
          required
        />
      </div>
      <div className="form_block">
        계정이 이미 있으신가요?
        <Link to="/login" className="form_link">
          로그인하기
        </Link>
      </div>
      <div className="form_block">
        <input type="submit" value="로그인" className="form_btn--submit" />
      </div>
    </form>
  );
}
