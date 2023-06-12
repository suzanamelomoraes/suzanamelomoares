import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function getRepo(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/suzanamelomoraes/${name}`
  );

  if (!response) {
    throw new Error("Failed to load repos");
  }
  return response.json();
}

const Repo = async ({ name }: { name: string }) => {
  const repo = await getRepo(name);
  console.log(repo);
  return (
    <>
      <h2>
        <Link className="link-title" target="_blank" href={repo.html_url}>
          {repo.name}
        </Link>
      </h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
