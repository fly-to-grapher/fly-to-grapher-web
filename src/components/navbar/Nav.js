import React from "react";
import './Nav.css'


const Nav = () => {
    return (
                <div>
                  {/* Start hero*/}
                  <div className="top">
                    <a href="#">
                      <img src="https://i.postimg.cc/63TNN04y/Fourth-Of-July.gif" alt="" />
                    </a>
                  </div>
                  <div className="hero">
                    <nav>
                      <img src="https://i.postimg.cc/3JgD2Jyt/p2.png" alt="IMg NOt Found" className="logo" />
                      <ul>
                        <li>Explore</li>
                        <li>License</li>
                        <li>Join</li>
                        <li>...</li>
                      </ul>
                      <a href="#" className="upload">Upload</a>
                    </nav>
                    <div className="content">
                      {/*     <h1>Royalty Free Stock Photos</h1> */}
                      <h1>The best free stock photos &amp; videos <br />shared by talented creators.</h1>
                      <input type="search" className="find" />
                      <p>Suggested :
                        <a href="#">person</a>
                        <a href="#">summer</a>
                        <a href="#">team</a>
                        <a href="#">technology</a>
                        <a href="#">man</a>
                        <a href="#">more</a>
                      </p>
                    </div>
                  </div>
                  {/* End hero*/}
                  <navbar>
                    <ul>
                      <li className="active">Home</li>
                      <li>Discover</li>
                      <li>Videos</li>
                      <li>Leaderboard</li>
                      <li>Challenges</li>
                    </ul>
                  </navbar>
                  {/* Start Gallery*/}
                  <a href="#" className="prev">&lt;</a>
                  <a href="#" className="next">&gt;</a>
                  <h1>Free Stock Photos</h1>
                  <main className="container">
                    <div><img src="https://i.postimg.cc/MGN0PM10/pexels-kelvin-valerio-617278.jpg" alt="" /></div>
                    <div className="vertical"><img src="https://i.postimg.cc/1RcZhLb8/pexels-maksim-goncharenok-4596641.jpg" alt="" /></div>
                    <div className="horizontal"><img src="https://i.postimg.cc/YStVt9FZ/pexels-matheus-bertelli-573298.jpg" alt="" /></div>
                    <div><img src="https://i.postimg.cc/bJ6n560d/a-tattooed-hand-doing-the-sign-for-i-love-you.jpg" alt="" /></div>
                    <div><img src="https://i.postimg.cc/PJgCG0Cf/pexels-wouter-de-jong-571169.jpg" alt="" /></div>
                    <div className="big"><img src="https://i.postimg.cc/K8P4YTdz/pexels-life-of-wu-3381013.jpg" alt="" /></div>
                    <div><img src="https://i.postimg.cc/rFXkR5tt/pic7.png" alt="" /></div>
                    <div className="vertical"><img src="https://source.unsplash.com/random" alt="" /></div>
                    <div><img src="https://picsum.photos/id/29/800" alt="" /></div>
                    <div className="horizontal"><img src="https://picsum.photos/id/10/800" alt="" /></div>
                    <div><img src="https://picsum.photos/id/11/800" alt="" /></div>
                    <div className="big"><img src="https://i.postimg.cc/FRY8f6KQ/pexels-andrea-piacquadio-3776169.jpg" alt="" /></div>
                    <div><img src="https://picsum.photos/id/1/200/300
          " alt="" /></div>
                    <div className="horizontal"><img src="https://source.unsplash.com/user/erondu/daily
          " alt="" /></div>
                    <div><img src="https://source.unsplash.com/weekly?landscape
          " alt="" /></div>
                    <div className="big"><img src="https://i.postimg.cc/cHyKbrbg/pexels-aleksandar-pasaric-325185.jpg
          " alt="" /></div>
                    <div className="explore">Explore</div>
                  </main>
                  {/* End Gallery*/}
                  {/* Start customer*/}
                  <div className="customer">
                    <h1>Our Customer</h1>
                    <div className="row">
                      <div className="col">
                        <img src="https://i.postimg.cc/gkYsQRH9/adobe.png" alt="" />
                      </div>
                      <div className="col">
                        <img src="https://i.postimg.cc/8zBmHmYf/facebook.png" alt="" />
                      </div>
                      <div className="col">
                        <img src="https://i.postimg.cc/5yLCtxdQ/microsoft.png" alt="" />
                      </div>
                      <div className="col">
                        <img src="https://i.postimg.cc/025kjksg/walmart.png" alt="" />
                      </div>
                    </div>
                  </div>
                  {/* End customer  */}
                  {/* Start About Me*/}
                  <div className="about">
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iure dolores. Iusto consequatur harum voluptas alias fugiat repellat odio, vitae quisquam impedit, odit, vero cumque distinctio. Recusandae, similique. Commodi, reiciendis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iure dolores. Iusto consequatur harum voluptas alias fugiat repellat odio, vitae quisquam impedit, odit, vero cumque distinctio. Recusandae, similique. Commodi, reiciendis.</p>
                  </div>
                  {/* End About Me*/}
                  {/* Start  Footer*/}
                  <footer>
                    <p>Copyright© 2021 All right Reserved By Bilal. Rizwaan</p>
                  </footer>
                  {/* End  Footer*/}
                </div>
              );
            }


export default Nav;