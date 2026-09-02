import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { FormEvent, useState } from "react";
import {
  about,
  business1,
  business2,
  business3,
  business4,
  company,
  logo,
  mainvisual,
  resAbout,
  resBusiness1,
  resBusiness2,
  resBusiness3,
  resBusiness4,
  resCompany1,
  resMainvisual,
} from "../images/task10Images";
import Reveal from "./Reveal";

// ===================================================================
// サイトに表示する文章・データはこの上部にまとめています。
// 文言を直したいときは基本的にこのあたりを編集すればOKです。
// ===================================================================

// ヘッダーのナビゲーション（href の #xxx は各セクションのidに対応）
const NAV_ITEMS = [
  { label: "NEWS", href: "#news" },
  { label: "ABOUT", href: "#about" },
  { label: "BUSINESS", href: "#business" },
  { label: "COMPANY", href: "#company" },
];

// お知らせ一覧
const NEWS_ITEMS = [
  {
    date: "2025.07.01",
    category: "NEWS",
    title: "コーポレートサイトを全面リニューアルしました",
  },
  {
    date: "2025.06.18",
    category: "PRESS",
    title: "「グッドデザイン賞 2025」を受賞しました",
  },
  {
    date: "2025.05.20",
    category: "NEWS",
    title: "本社オフィスを移転しました",
  },
];

// 私たちについて（段落ごとに配列で管理）
const ABOUT_PARAGRAPHS = [
  "ウェブエンターテイメントデザインは、Webサイト制作を軸に、マーケティング・メディア運営・プロモーションまでを一気通貫で手がけるクリエイティブカンパニーです。",
  "「伝わる」を科学し、データとデザインの両輪でブランドの価値を最大化します。感覚だけに頼らず、成果から逆算した設計思想を大切にしています。",
  "業種や規模を問わず、これまで多くのプロジェクトに伴走してきました。ビジネスの本質を捉え、ユーザーの心を動かす体験を、これからもつくり続けます。",
];

// 事業内容（画像とセットで管理）
const BUSINESS_ITEMS = [
  {
    title: "Web制作・マーケティング",
    description:
      "戦略立案からデザイン・開発、公開後の改善運用まで、成果につながるWebサイトをワンストップでご支援します。",
    image: business1,
    resImage: resBusiness1,
  },
  {
    title: "インターネットメディア事業",
    description:
      "自社メディアの企画・編集・運営を通じて、ユーザーにとって価値ある情報を届けます。",
    image: business2,
    resImage: resBusiness2,
  },
  {
    title: "プロモーション企画・制作",
    description:
      "動画・広告・キャンペーンなど、人の心を動かすプロモーションを企画・制作します。",
    image: business3,
    resImage: resBusiness3,
  },
  {
    title: "ソーシャル企画・運営",
    description:
      "SNSアカウントの運用から企画までを支援し、ブランドとファンがつながる仕組みをつくります。",
    image: business4,
    resImage: resBusiness4,
  },
];

// 会社情報（value は文字列でも、複数行にしたいときは配列でもOK）
const COMPANY_INFO: { label: string; value: string | string[] }[] = [
  { label: "会社名", value: "ウェブエンターテイメントデザイン株式会社" },
  { label: "設立", value: "2021年1月1日" },
  { label: "代表者", value: "代表取締役　山田 太郎" },
  { label: "資本金", value: "3,000,000円" },
  { label: "従業員数", value: "32名（2025年7月現在）" },
  { label: "所在地", value: "東京都渋谷区桜丘町99-9 West Building 3F" },
  {
    label: "事業内容",
    value: [
      "Web制作・マーケティング",
      "インターネットメディア事業",
      "プロモーション企画・制作",
      "ソーシャル企画・運営",
    ],
  },
];

// MUIの入力欄やボタンの色を、このサイトに合わせて黒基調にするための設定
const theme = createTheme({
  palette: { primary: { main: "#000000" } },
  typography: { fontFamily: "Arial, sans-serif" },
});

const Task10 = () => {
  // お問い合わせフォームの入力内容を覚えておく
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // 送信が完了したかどうか
  const [submitted, setSubmitted] = useState(false);

  // 入力欄が変わるたびに、その値を form に反映する
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 送信ボタンが押されたときの処理（今回はデモなので画面上で完了表示するだけ）
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページの再読み込みを止める
    setSubmitted(true); // 完了メッセージを表示
    setForm({ name: "", email: "", message: "" }); // 入力欄を空に戻す
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* ヘッダー（上部固定） */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#F0F0F0",
            padding: { xs: "18px 0", md: "0 0 0 91px" },
            // PCではスクロールしても上部に貼り付く
            position: { xs: "static", md: "sticky" },
            top: 0,
            zIndex: 1100,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "flex-start",
              alignItems: { xs: "flex-start", md: "center" },
              backgroundColor: "#F0F0F0",
              padding: { xs: "0", md: "0 0 0 91px" },
            }}
          >
            {/* logo */}
            <Box
              sx={{
                width: "100px",
                height: "25px",
                backgroundImage: `url(${logo})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: { xs: "8px", md: "0" },
              }}
            ></Box>

            {/* 4つのナビゲーション（配列から自動生成） */}
            <Box
              sx={{
                display: "flex", // 横並びにする
                justifyContent: "flex-start",
                gap: "30px", // ナビゲーションリンク間のスペース
                marginLeft: { xs: "0", md: "60px" },
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "#000000",
                    fontSize: "14px",
                    textDecoration: "none",
                    fontFamily: "Arial",
                    transition: "opacity 0.2s",
                    "&:hover": { opacity: 0.5 }, // ホバーで少し薄く
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* お問い合わせのナビゲーション（クリックでCONTACTへ移動） */}
          <Box
            sx={{
              display: { xs: "none", md: "block" }, // モバイルでは非表示
            }}
          >
            <Link
              href="#contact"
              sx={{
                display: "block",
                justifyContent: "flex-end",
                color: "#FFFFFF",
                backgroundColor: "#000000",
                fontSize: "14px",
                textDecoration: "none",
                fontFamily: "Arial",
                padding: "34px 64px",
                transition: "background-color 0.2s",
                "&:hover": { backgroundColor: "#333333" },
              }}
            >
              お問い合わせ
            </Link>
          </Box>
        </Box>

        {/* メインビジュアル（キャッチコピーを重ねる） */}
        <Box
          sx={{
            position: "relative",
            width: "100%", // 幅を100%に設定
            height: "600px", // 固定の高さ
            backgroundImage: {
              xs: `url(${resMainvisual})`,
              md: `url(${mainvisual})`,
            },
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "flex-end", // 中身を下寄せ
          }}
        >
          <Reveal>
            <Box
              sx={{
                margin: { xs: "0 0 40px 16px", md: "0 0 64px 91px" },
                padding: { xs: "20px 24px", md: "28px 40px" },
                backgroundColor: "rgba(255, 255, 255, 0.72)", // うっすら白い下地で文字を読みやすく
                backdropFilter: "blur(2px)",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "28px", md: "44px" },
                  fontFamily: "Arial",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  lineHeight: 1.2,
                  color: "#000000",
                }}
              >
                Design the
                <br />
                Next Experience
              </Typography>
              <Typography
                sx={{
                  marginTop: "14px",
                  fontSize: { xs: "13px", md: "15px" },
                  color: "#000000",
                  letterSpacing: "0.08em",
                }}
              >
                デザインとテクノロジーで、ビジネスに新しい価値を。
              </Typography>
            </Box>
          </Reveal>
        </Box>

        {/* News */}
        <Box
          id="news"
          sx={{
            padding: { xs: "80px 16px", md: "120px 200px" },
            backgroundColor: "#F0F0F0",
            scrollMarginTop: { md: "96px" }, // 固定ヘッダーに隠れないように余白
          }}
        >
          <Reveal>
            <Typography
              sx={{
                fontSize: "36px",
                fontFamily: "Arial",
                letterSpacing: "0.3em",
              }}
            >
              NEWS
            </Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
              ニュース
            </Typography>
            <Divider
              sx={{
                width: "40px",
                margin: { xs: "24px 0 34px 0", md: "36px 0 50px 0" },
                backgroundColor: "#000000",
              }}
            />

            {/* ニュース内のコンテンツの大枠（配列から自動生成） */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "flex-start",
              }}
            >
              {NEWS_ITEMS.map((news, index) => (
                <Box
                  key={news.title}
                  sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
                >
                  {/* 2件目以降の前に縦線を入れる */}
                  {index > 0 && (
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        height: "78px",
                        backgroundColor: "#000000",
                        margin: { xs: "0", md: "0 20px 0 80px" },
                        display: { xs: "none", md: "block" },
                      }}
                    />
                  )}

                  {/* 1件分のお知らせ */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      marginBottom: { xs: "40px", md: "0" },
                    }}
                  >
                    {/* 年月日とカテゴリ */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "19px",
                        marginBottom: "16px",
                      }}
                    >
                      <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
                        {news.date}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontFamily: "Arial",
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          padding: "3px 7px",
                        }}
                      >
                        {news.category}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "16px", fontFamily: "Arial" }}>
                      {news.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>

        {/* About(多分グリッド) */}
        <Grid
          container
          id="about"
          sx={{ backgroundColor: "#F0F0F0", scrollMarginTop: { md: "96px" } }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%", // 幅を100%に設定
                height: { xs: "300px", md: "400px" }, // 固定の高さ
                backgroundImage: { xs: `url(${resAbout})`, md: `url(${about})` },
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ padding: { xs: "30px 16px 0", md: "180px 97px 0 70px" } }}
          >
            <Reveal>
              <Typography
                sx={{
                  fontSize: "36px",
                  fontFamily: "Arial",
                  letterSpacing: "0.3em",
                }}
              >
                ABOUT
              </Typography>
              <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
                私たちについて
              </Typography>
              <Divider
                sx={{
                  width: "40px",
                  margin: { xs: "24px 0 34px 0", md: "36px 0 50px 0" },
                  backgroundColor: "#000000",
                }}
              />
              {ABOUT_PARAGRAPHS.map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Arial",
                    lineHeight: "30.8px",
                    marginBottom: "16px",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Reveal>
          </Grid>
        </Grid>

        {/* ビジネス */}
        <Box
          id="business"
          sx={{
            padding: { xs: "0 16px", md: "0 200px 185px 200px" },
            backgroundColor: "#F0F0F0",
            scrollMarginTop: { md: "96px" },
          }}
        >
          <Box
            sx={{
              padding: { xs: "80px 0", md: "120px 0" },
            }}
          >
            {/* ビジネスの文字部分 */}
            <Reveal>
              <Box>
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontFamily: "Arial",
                    letterSpacing: "0.3em",
                  }}
                >
                  BUSINESS
                </Typography>
                <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
                  事業内容
                </Typography>
                <Divider
                  sx={{
                    width: "40px",
                    margin: { xs: "24px 0 34px 0", md: "36px 0 50px 0" },
                    backgroundColor: "#000000",
                  }}
                />
              </Box>
            </Reveal>

            {/* 画像とテキストの塊（左右2列。左列を少し下げて互い違いに配置） */}
            <Grid container justifyContent="center" sx={{ columnGap: "64px" }}>
              {/* 左側の2件 */}
              <Grid
                item
                xs={12}
                md="auto"
                sx={{ marginTop: { xs: "0", md: "112px" } }}
              >
                {BUSINESS_ITEMS.slice(0, 2).map((item, index) => (
                  <BusinessCard
                    key={item.title}
                    item={item}
                    // 2件目は上に余白を入れて縦に並べる
                    topSpacing={index === 0 ? undefined : { xs: "30px", md: "0" }}
                    bottomSpacing={index === 0 ? { xs: "30px", md: "40px" } : undefined}
                  />
                ))}
              </Grid>

              {/* 右側の2件 */}
              <Grid
                item
                xs={12}
                md="auto"
                sx={{ marginTop: { xs: "30px", md: "0" } }}
              >
                {BUSINESS_ITEMS.slice(2, 4).map((item, index) => (
                  <BusinessCard
                    key={item.title}
                    item={item}
                    topSpacing={index === 0 ? undefined : { xs: "30px", md: "0" }}
                    bottomSpacing={index === 0 ? { xs: "30px", md: "40px" } : undefined}
                  />
                ))}
              </Grid>
            </Grid>
          </Box>

          {/* カンパニー */}
          <Box
            id="company"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              position: "relative",
              scrollMarginTop: { md: "96px" },
            }}
          >
            {/* カンパニーの箱 */}
            <Box
              sx={{
                width: { xs: "300px", md: "500px" },
                backgroundColor: "#FFFFFF",
                padding: { xs: "40px 20px", md: "100px 62px" },
                marginBottom: { xs: "20px", md: "0" },
                zIndex: 0,
              }}
            >
              <Reveal>
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontFamily: "Arial",
                    letterSpacing: "0.3em",
                  }}
                >
                  COMPANY
                </Typography>
                <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
                  会社情報
                </Typography>
                <Divider
                  sx={{
                    width: "40px",
                    margin: { xs: "24px 0 34px 0", md: "36px 0 50px 0" },
                    backgroundColor: "#000000",
                  }}
                />

                {/* 会社情報の各行（配列から自動生成。ラベルは幅を固定して値を揃える） */}
                {COMPANY_INFO.map((row) => (
                  <Box
                    key={row.label}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: "flex-start",
                      marginBottom: "12px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Arial",
                        color: "#555555",
                        width: { md: "96px" },
                        flexShrink: 0,
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Box>
                      {Array.isArray(row.value) ? (
                        row.value.map((v) => (
                          <Typography
                            key={v}
                            sx={{
                              fontSize: "14px",
                              fontFamily: "Arial",
                              marginLeft: { xs: "14px", md: "0" },
                            }}
                          >
                            {v}
                          </Typography>
                        ))
                      ) : (
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontFamily: "Arial",
                            marginLeft: { xs: "14px", md: "0" },
                          }}
                        >
                          {row.value}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Reveal>
            </Box>

            {/* 右の画像 */}
            <Box
              sx={{
                width: { xs: "100%", md: "547px" },
                height: "400px",
                backgroundImage: {
                  xs: `url(${resCompany1})`,
                  md: `url(${company})`,
                },
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: { xs: "relative", md: "absolute" }, // 絶対配置で重ねる
                top: { md: 81 }, // 上からの位置を調整
                right: { xs: "0", md: "0" }, // 右にずらす
                zIndex: 1,
              }}
            />
          </Box>
        </Box>

        {/* お問い合わせ */}
        <Box
          id="contact"
          sx={{
            padding: { xs: "80px 16px", md: "120px 200px" },
            backgroundColor: "#FFFFFF",
            scrollMarginTop: { md: "96px" },
          }}
        >
          <Reveal>
            <Typography
              sx={{
                fontSize: "36px",
                fontFamily: "Arial",
                letterSpacing: "0.3em",
              }}
            >
              CONTACT
            </Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
              お問い合わせ
            </Typography>
            <Divider
              sx={{
                width: "40px",
                margin: { xs: "24px 0 34px 0", md: "36px 0 50px 0" },
                backgroundColor: "#000000",
              }}
            />

            {submitted ? (
              // 送信後に表示するお礼メッセージ
              <Box
                sx={{
                  maxWidth: "560px",
                  padding: "40px 24px",
                  border: "1px solid #000000",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "16px", fontFamily: "Arial", marginBottom: "8px" }}
                >
                  お問い合わせありがとうございます。
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#555555" }}>
                  担当者より折り返しご連絡いたします。
                </Typography>
              </Box>
            ) : (
              // 入力フォーム
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ maxWidth: "560px" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Arial",
                    lineHeight: "28px",
                    marginBottom: "32px",
                  }}
                >
                  サービスへのご相談やお見積もり、採用に関するお問い合わせなど、お気軽にご連絡ください。
                </Typography>
                <Stack spacing={3}>
                  <TextField
                    name="name"
                    label="お名前"
                    variant="standard"
                    required
                    fullWidth
                    value={form.name}
                    onChange={handleChange}
                  />
                  <TextField
                    name="email"
                    label="メールアドレス"
                    type="email"
                    variant="standard"
                    required
                    fullWidth
                    value={form.email}
                    onChange={handleChange}
                  />
                  <TextField
                    name="message"
                    label="お問い合わせ内容"
                    variant="standard"
                    required
                    fullWidth
                    multiline
                    minRows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      alignSelf: "flex-start",
                      marginTop: "16px",
                      padding: "12px 48px",
                      borderRadius: 0,
                      fontFamily: "Arial",
                      letterSpacing: "0.1em",
                      boxShadow: "none",
                      "&:hover": { backgroundColor: "#333333", boxShadow: "none" },
                    }}
                  >
                    送信する
                  </Button>
                </Stack>
              </Box>
            )}
          </Reveal>
        </Box>

        {/* フッター手前 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "flex-start", md: "space-between" },
            paddingTop: { xs: "48px", md: "77px" },
            backgroundColor: "#FFFFFF",
            padding: { xs: "48px 16px 0 16px", md: "40px 200px" },
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "25px",
              backgroundImage: `url(${logo})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginBottom: { xs: "8px", md: "0" },
            }}
          ></Box>
          <Box>
            <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
              Web Entertainment Design Inc.
            </Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
              West Building 3F
            </Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
              9-99 Sakuragaokacho Shibuya-ku
            </Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
              Tokyo, Japan 150-0031
            </Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
              T/03-1234-5678
            </Typography>
          </Box>
        </Box>

        {/* フッター */}
        <Box
          component="footer"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#000000",
            padding: { xs: "20px 16px", md: "20px 200px" },
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              height: "14px",
            }}
          >
            © Web Entertainment Design Inc.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

// 事業内容の1枚分（ラベル・画像・説明文）をまとめた小さな部品。
// 画像はホバーするとゆっくり拡大します。
type BusinessCardProps = {
  item: (typeof BUSINESS_ITEMS)[number];
  topSpacing?: { xs: string; md: string };
  bottomSpacing?: { xs: string; md: string };
};

const BusinessCard = ({ item, topSpacing, bottomSpacing }: BusinessCardProps) => {
  return (
    <Reveal>
      <Box sx={{ marginTop: topSpacing, marginBottom: bottomSpacing }}>
        {/* ラベル部分 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Divider
            sx={{
              width: "8px",
              backgroundColor: "#000000",
              marginRight: "10px",
            }}
          />
          <Typography sx={{ fontSize: "14px", fontFamily: "Arial" }}>
            {item.title}
          </Typography>
        </Box>

        {/* 画像（枠でクリップして、中の画像だけ拡大する） */}
        <Box
          sx={{
            width: { xs: "343px", md: "368px" },
            height: "232px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: {
                xs: `url(${item.resImage})`,
                md: `url(${item.image})`,
              },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transition: "transform 0.5s ease",
              "&:hover": { transform: "scale(1.06)" },
            }}
          />
        </Box>

        {/* 説明文 */}
        <Typography
          sx={{
            width: { xs: "343px", md: "368px" },
            fontSize: "13px",
            fontFamily: "Arial",
            lineHeight: "22px",
            color: "#555555",
            marginTop: "12px",
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Reveal>
  );
};

export default Task10;
