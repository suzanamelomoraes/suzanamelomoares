import Link from "next/link";
import { FaGratipay, FaCalendarDay } from "react-icons/fa";

export const metadata = {
  title: "Suzana&apos;s Articles",
};

export type IArticle = {
  id: number;
  title: string;
  description: string;
  public_reactions_count: number;
  readable_publish_date: string;
  path: string;
};

export async function getArticles() {
  const response = await fetch(
    "https://dev.to/api/articles?username=suzanamelomoraes"
  );
  if (!response) {
    throw new Error("Failed to load articles");
  }
  return response.json();
}

const ArticlesPage = async () => {
  const articles = await getArticles();
  return (
    <div className="content-container">
      <h2>Articles</h2>
      <ul className="content-list">
        {articles?.map((article: IArticle) => (
          <li key={article.id}>
            <Link href={`https://dev.to${article.path}`}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="content-details">
                <span>
                  <FaGratipay /> {article.public_reactions_count}
                </span>
                <span>
                  <FaCalendarDay /> {article.readable_publish_date}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
