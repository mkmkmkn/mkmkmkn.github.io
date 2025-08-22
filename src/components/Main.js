import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic10 from '../images/pic10.jpg'

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
          <h3>2025.08.22&#040;Fri&#041;</h3>
          <img src={pic10} alt="" />
          <p>
            「MAGICAL CHAIN ひとり SPECIAL at 山科清水焼団地」
            <br />
            2025年11月15日(土)　開場17:00　開演18:10
            <br />
            18:10〜Opening Act
            <br />
            18:30〜ウルフルケイスケ
            <br />
            京都　山科区清水焼団地・モグラと夕陽
            <br />
             ／
            <br />
            「モグラと夕陽」
            <br />
            〒607-8326 京都市山科区川田御出町50-23
            <br />
             ／
            <br />
            【先着35人様限定】
            <br />
            チケット代金　前売り4,500円　当日5,000円
            <br />
            高校生以下 前売・当日￥2,000
            <br />
            （高校生は備考欄に必ず高校生と書いてください）
            <br />
            ともに+1drink500円
            <br />
            丸椅子とスタンディング共通料金
            <br />
             
            <br />
            O.A 「ロントモア」モア宮川＆RON（ex.DUFF）
            <br />
            ／
            <br />
            【予約】
            <br />
            チケット予約サイト「TIGET」にて先着順
            <br />
            ※予約開始 2025.9.20（土）12:00～
            <br />
            ※店舗電話予約不可
            <br />
            • お支払いはライブ当日会場入り口にて。
            <br />
            • 少人数の会場となるため早期ソウルドアウトの可能性があります。ご希望の方はお早めにお願いいたします。
            <br />
            ／
            <br />
            PROFILE
            <br />
            ウルフルケイスケ
            <br />
            UIful Keisuke
            <br />
            1965.5.23 大阪府高槻市出身 A型
            <br />
            「ミスタースマイル」の愛称でお馴染みの笑うギタリスト。
            <br />
            ウルフルズのギタリストとして、1992年デビュー。
            <br />
            多数アーティストのレコーディングやイベントにも参加。
            <br />
            不思議でステキな出会い＝マジカル・チェインをテーマに日本全国津々浦々を弾き巡る。
            <br />
            そのスタイルは弾き語りからバンドまで多にわたり、自由でシンプルなスタンスでご機嫌なロックンロールを展開中！
            <br />
            ／／／／／／／／／／／
            <br />
            ※O.A「ロントモア」＝ご当地シンガーソングライター・モア宮川と、バンド「DUFF」の元ギタリストRONによるユニット。RoNt more
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
