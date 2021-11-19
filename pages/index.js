/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import useSWR from "swr";
import API from "../utils/fetchController";

export default function Home() {
  const { data, error } = useSWR("/api/team/score", API.request);
  const scores = data?.scores;
  console.log(scores);

  return (
    <div className="container h-100 d-flex align-items-center">
      <div className="w-100">
        <div className="main-box position-relative text-white w-100">
          <div className="logo-img bg-dark text-center">
            <img
              src="592a99a3810f6538b87c.png"
              className="pt-5 pb-4 px-3 w-75"
            />
          </div>
          <div className="position-absolute right-side">
            <h5 className="bg-orange px-3 py-2 d-inline-flex">
              <span>National Basketball Association</span>
            </h5>
            <div className="mt-3">
              <div className="d-flex bg-black p-2 justify-content-between align-items-center">
                <div className="bg-secondary d-flex align-items-center pr-5">
                  <img src="be7765eabc7e61d8abc9.png" width="40" />
                  <h4 className="mb-0 ml-3 mr-5 text-uppercase">
                    <span>{scores?.home_team.name}</span>
                  </h4>
                </div>
                <span>
                  <h3 className="font-weight-bold">
                    {scores?.home_team.score} / {scores?.away_team.score}
                  </h3>
                </span>
                <div className="bg-secondary d-flex align-items-center pr-5">
                  <img src="99aece48307946e682e7.png" width="40" />
                  <h4 className="mb-0 ml-3 mr-5 text-uppercase">
                    <span>{scores?.away_team.name}</span>
                  </h4>
                </div>
              </div>
              <div className="border bg-black py-2 px-3 float-end mr-5 mt-3">
                <h4 className="mb-0 text-uppercase">
                  <span>{scores?.home_team.name}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="bg-black py-2 px-3 mt-3 d-inline-flex">
            <img src="location_icon.svg" width="25" className="mr-2" />
            <h5 className="mb-0 text-uppercase">
              <span>United center</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
