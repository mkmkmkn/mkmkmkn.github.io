import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="profile"
          className={`${this.props.article === 'profile' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Profile</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            <b>RON</b>
            <br />
            6/25 生まれ
            <br />
            大阪府堺市出身
            <br />
            B型
            <br />
            <br />
            影響を受けたアーティスト
            <br />
            CASCADE
            <br />
            THE YELLOW MONKEY
            <br />
            氣志團
            <br />
            <br />
            [SNS]
            <br />
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/RON_625"
                  className="icon fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ron625/?hl=ja"
                  className="icon fa-instagram"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          横浜ベイスターズ
          <br />
          関根大気選手入場曲
          <br />
          DUFF「HERO」
          <br />
          Guitar
          <br />
          <br />
          日本ハムファイターズ
          <br />
          加藤貴之投手入場曲
          <br />
          VOG「Try my life」
          <br />
          Guitar composing arrange
          <br />
          <br />
          沖縄銀行CM
          <br />
          おきぎんスマート
          <br />
          sound担当
          {close}
        </article>

        <article
          id="infomation"
          className={`${this.props.article === 'infomation' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Infomation</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>2021.06.25&#040;Fri&#041;</h3>
          <p>
            本日よりデジタル音源第1弾
            <br />
            「The sky」配信開始！
            <br />
            今回の楽曲はゆるやかポップインストです。
            <br />
            旅のお供に、ゴルフのお供に、
            <br />
            夏のドライブのお供にどうぞ。
            <br />
            <br />
            <a href="https://www.tunecore.co.jp/artists/RONboy">
              https://www.tunecore.co.jp/artists/RONboy
            </a>
            <br />
            <br />
          </p>
          {close}
        </article>

        {/* <article
          id="media"
          className={`${this.props.article === 'media' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Media</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h3></h3>
          <p>
            <br />
            <br />
          </p>
          {close}
        </article> */}

        {/* <article
          id="live"
          className={`${this.props.article === 'live' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Live</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <h3></h3>
          <p>
            <br />
            <br />
          </p>
          {close}
        </article> */}

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            method="post"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf9Csrbqrpnb3m7ZbWYrPZRaxzj8E8-6VOYmyRVC8ChdwqkKw/formResponse"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="entry.1468219197"
                id="name"
                required=""
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="entry.377096930"
                id="email"
                required=""
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="entry.1971985601"
                id="message"
                rows="4"
                required=""
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/RON_625" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ron625/?hl=ja"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
