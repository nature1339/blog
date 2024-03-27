import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="post_navigation">
        <div className="post_navigation--active">전체</div>
        <div>나의글</div>
      </div>
      <div className="post-list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post_box">
            <Link to={`/posts/${index}`}>
              <div className="post_profile-box">
                <div className="post_profile" />
                <div className="post_author-name">패스트캠퍼스</div>
                <div className="post_date">2023.07.08</div>
              </div>
              <div className="post_title"> 게시글 {index} </div>
              <div className="post_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div className="post_utils-box">
                <div className="post_delete">삭제</div>
                <div className="post_edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
