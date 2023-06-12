export interface IParams {
  params: {
    name: string;
  };
}

const RepoPage = ({ params: { name } }: IParams) => {
  return (
    <>
      {" "}
      <div className="card">{name}</div>
      <p>Repo Details</p>
    </>
  );
};

export default RepoPage;
