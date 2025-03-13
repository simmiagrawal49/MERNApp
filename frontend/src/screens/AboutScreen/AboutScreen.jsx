import React from "react";
import { Col, Row, Image } from "antd";
import me from "./Assets/me.jpeg";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div>
      <div className="about-wrapper">
        <Row gutter={[32, 64]}>


          <Col span={24}>
          {"hello hello"}
            {/* <div className="about-description">
              <p class="preFlex flexIn">
                <b>Almost Real</b>
                <span>
                  is a source of fine art photography and visual art by a
                  collective of global artists and creatives.
                </span>
              </p>

              <p>
                <span>
                  Almost Real serves as a dynamic platform for both emerging and
                  established artists to share their works and push the
                  boundaries of what is traditionally considered "real." It is a
                  space where imagination flourishes, where artists are
                  encouraged to challenge conventions and invite viewers into
                  thought-provoking realms of artistic interpretation.
                </span>
              </p>
              <p>
                <span>
                  Here, the unconventional is the norm, and the unexpected is
                  celebrated. This is a place where rules are made to be broken,
                  and where creativity flows freely.
                </span>
              </p>
              <p>
                <span>
                  Too many times we've heard the term “get a real job” or “come
                  back to the real world” so AR was created as an alternative
                  world, an “almost” real world where anyone can express
                  themselves without judgement. Nowadays, more than ever before
                  people can “create anywhere”.
                </span>
              </p>
              <p>
                <span>Almost Real was originally founded in 2014 as a </span>
                <a href="https://almostreal.me/blogs/interviews">
                  <span>media platform</span>
                </a>
                <span>
                  {" "}
                  to share stories about creatives that "did what they wanted,
                  not what was expected". It evolved with new energy in 2022 as
                  an online gallery of photography and visual arts, continuing
                  to support and share creative stories and movements.
                </span>
              </p>
              <p>
                <span>
                  The creative powerhouse behind Almost Real is founder{" "}
                </span>
                <a href="https://www.instagram.com/michelleowen/">
                  <span>Michelle Owen</span>
                </a>
                <span>
                  . With an unwavering passion for art, music, and boundless
                  possibilities of creative expression, Michelle is establishing
                  herself as a luminary in the industry.
                </span>
              </p>
              <p>
                <span>
                  Michelle has transformed Almost Real into a haven for artists.
                  Her keen eye for detail has led to the discovery of remarkable
                  talents, while showcasing a diverse range of artistic styles
                  and narratives.
                </span>
              </p>
              <p>
                <span>
                  She understands that creativity thrives in an environment
                  where artists are free to explore their unique visions without
                  constraints. Through her leadership, she has created a
                  sanctuary where artists can push boundaries, challenge norms,
                  and inspire others to view the world through a new lens.
                </span>
              </p>
              <p>
                <span>
                  Beyond her role as a founder, Michelle is a true creative
                  polymath. As a{" "}
                </span>
                <a href="https://soundcloud.com/michelle-owen">
                  <span>DJ and Music Producer</span>
                </a>
                <span>
                  , her artistry has expanded over 20 years in the music
                  industry, and enabled her to live and tour all over the world.
                  Her multifaceted talents enrich her perspective as a curator,
                  allowing her to forge connections between different artistic
                  disciplines and inspire collaborative ventures that push the
                  boundaries of artistic expression.
                </span>
              </p>
              <p>
                <span>...</span>
              </p>
              <p>
                <i>
                  <span>
                    "No artist tolerates reality," says Nietzsche. That is true,
                    but no artist can get along without reality. Artistic
                    creation is a demand for unity and a rejection of the world.
                    But it rejects the world on account of what it lacks and in
                    the name of what it sometimes is.”
                  </span>
                </i>
              </p>
              <p>
                <span>- Albert Camus</span>
              </p>
            </div> */}
          </Col>
          {/* <Col span={12} className="about-content-me">
            <div className="about-title"> our artist</div>
            <div className="about-description">
              This is the independent studio based in pune where our captivating
              mixed media paintings and art prints are brought to life. Our
              artworks and prints are available for purchase in our studio shop.
            </div>
          </Col>
          <Col span={12} className="about-images">
            <Image src={me} alt="me" />
          </Col> */}
        </Row>
      </div>
      <NewsLetter />
    </div>
  );
};
//https://icons8.com/icons/set/youtube

export default AboutScreen;
