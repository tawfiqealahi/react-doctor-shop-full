import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tawfiqealahi/react-doctor-shop-full/main/public/doctorfakedata.json"
    )
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div>
      <div className="service">
        <h3 className="threed"> PREVENTION</h3>
        <h2 className="prevent-heading">How to Prevent Yourself</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing <br /> elit.
          Aenean ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="service-cart container-fluid">
        <div className="row">
        {
            data?.map(e=>(
                <div key={e.id} className="col-md-4 col-xl-3 col-sm-6">
                <div className="cart-service p-3 border rounded text-center">
                  <div className="cart-image">
                    <img src={e.image} alt="" />
                    <h2>{e.name}</h2>
                <p>{e.price}</p>
                  </div>
                </div>
              </div>
            ))
        }
        </div>

        {/* cart practice */}
        {/* <div className="containerflipcards"> */}
          {/* <div className="row"> */}
           
          <div className=" row">
    <div className="col-md-4 col-sm-12">
    <div className="square-flip ">
		<div className='square' data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb">
			<div className="square-container">
				<div className="align-center"><img src="http://titanicthemes.com/files/flipbox/kallyas2.png" className="boxshadow" alt=""/></div>
				<h2 className="textshadow">Kallyas Wp Theme</h2>
				<h3 className="textshadow">The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme.</h3>
			</div>
			<div className="flip-overlay"></div>
		</div>
		<div className='square2' data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb">
			<div className="square-container2">
				<div className="align-center"></div>
				<h2>#1 Front-end Visual Website Builder in 2016</h2>
			</div>
			<div className="flip-overlay"></div>
		</div>
	</div>
    </div>

	<div className="col-md-4">
    <div className="square-flip ">
		<div className='square' data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png">
			<div className="square-container">
				<div className="align-center"><img src="http://titanicthemes.com/files/flipbox/kallyas.png" className="boxshadow" alt=""/></div>
				<h2 className="textshadow">Kallyas WordPress Theme</h2>
				<h3 className="textshadow">The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme.</h3>
			</div>
			<div className="flip-overlay"></div>
		</div>
		<div className='square2' data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png">
			<div className="square-container2">
				<div className="align-center"></div>
				<a href="http://kallyas.net" target="_blank" className="boxshadow kallyas-button">View Demos</a>
			</div>
			<div className="flip-overlay"></div>
		</div>
	</div>
    </div>

	<div className="col-md-4">
    <div className="square-flip ">
		<div className='square' data-image="https://instagram.fotp3-2.fna.fbcdn.net/t51.2885-15/e35/14712096_386502691740262_2357154798815412224_n.jpg?ig_cache_key=MTM2NzU2MzUwNjQ3OTUzOTgxNQ%3D%3D.2">
			<div className="square-container">
				<div className="align-center"><img src="http://titanicthemes.com/files/flipbox/kallyas2.png" className="boxshadow" alt=""/></div>
				<h2 className="textshadow">Kallyas WordPress Theme</h2>
				<h3 className="textshadow">The #1 Selling Most Enjoyable and Creative Multipurpose WordPress theme.</h3>
			</div>
			<div className="flip-overlay"></div>
		</div>
		<div className='square2' data-image="http://titanicthemes.com/files/flipbox/kallyas-wedding.jpg">
			<div className="square-container2">
				<div className="align-center"></div>
				<h2>The only theme you'll ever need. No codding skills needed.</h2>
			</div>
			<div className="flip-overlay"></div>
		</div>
	</div>
    </div>
   
  <br/>
</div>





          {/* </div> */}
          {/* </div> */}

          {/* cart start*/}

          {/* <div className="centerflipcards row ">
            <div className="col-md-4"></div>
          </div>

          <div className="col-md-4">
            <div className="square-flip">
              <div
                className="square"
                data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png"
              >
                <div className="square-container">
                  <div className="align-center">
                    <img
                      src="http://titanicthemes.com/files/flipbox/kallyas.png"
                      className="boxshadow"
                      alt=""
                    />
                  </div>
                  <h2 className="textshadow">Kallyas WordPress Theme</h2>
                  <h3 className="textshadow">
                    The #1 Selling Most Enjoyable and Creative Multipurpose
                    WordPress theme.
                  </h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div
                className="square2"
                data-image="http://titanicthemes.com/files/flipbox/kallyas-bundle.png"
              >
                <div className="square-container2">
                  <div className="align-center"></div>
                  <a
                    href="http://kallyas.net"
                    target="_blank"
                    className="boxshadow kallyas-button"
                  >
                    View Demos
                  </a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="square-flip">
              <div
                className="square"
                data-image="https://instagram.fotp3-2.fna.fbcdn.net/t51.2885-15/e35/14712096_386502691740262_2357154798815412224_n.jpg?ig_cache_key=MTM2NzU2MzUwNjQ3OTUzOTgxNQ%3D%3D.2"
              >
                <div className="square-container">
                  <div className="align-center">
                    <img
                      src="http://titanicthemes.com/files/flipbox/kallyas2.png"
                      className="boxshadow"
                      alt=""
                    />
                  </div>
                  <h2 className="textshadow">Kallyas WordPress Theme</h2>
                  <h3 className="textshadow">
                    The #1 Selling Most Enjoyable and Creative Multipurpose
                    WordPress theme.
                  </h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div
                className="square2"
                data-image="http://titanicthemes.com/files/flipbox/kallyas-wedding.jpg"
              >
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>
                    The only theme you'll ever need. No codding skills needed.
                  </h2>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>

          <br />
          <br />
        </div> */}

        {/* cart end */}
      </div>
    </div>
  );
};

export default Services;
