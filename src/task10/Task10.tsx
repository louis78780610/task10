import { Box, Divider, Grid, Link, Typography } from "@mui/material";
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

const Task10 = () => {
  return (
    <Box>
      {/* ヘッダー */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F0F0F0",
          padding: { xs: "18px 0", md: "0 0 0 91px" },
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

          {/* 4つのナビゲーション */}
          <Box
            sx={{
              display: "flex", // 横並びにする
              justifyContent: "flex-start",
              gap: "30px", // ナビゲーションリンク間のスペース
              marginLeft: { xs: "0", md: "60px" },
            }}
          >
            <Link
              href="#"
              sx={{
                color: "#000000",
                fontSize: "14px",
                textDecoration: "none",
                fontFamily: "Arial",
              }}
            >
              NEWS
            </Link>
            <Link
              href="#"
              sx={{
                color: "#000000",
                fontSize: "14px",
                textDecoration: "none",
                fontFamily: "Arial",
              }}
            >
              ABOUT
            </Link>
            <Link
              href="#"
              sx={{
                color: "#000000",
                fontSize: "14px",
                textDecoration: "none",
                fontFamily: "Arial",
              }}
            >
              BUSINESS
            </Link>
            <Link
              href="#"
              sx={{
                color: "#000000",
                fontSize: "14px",
                textDecoration: "none",
                fontFamily: "Arial",
              }}
            >
              COMPANY
            </Link>
          </Box>
        </Box>

        {/* お問い合わせのナビゲーション */}
        <Box
          sx={{
            display: { xs: "none", md: "block" }, // モバイルでは非表示
          }}
        >
          <Link
            href="#"
            sx={{
              display: "block",
              justifyContent: "flex-end",
              color: "#FFFFFF",
              backgroundColor: "#000000",
              fontSize: "14px",
              textDecoration: "none",
              fontFamily: "Arial",
              padding: "34px 64px",
            }}
          >
            お問い合わせ
          </Link>
        </Box>
      </Box>

      {/* メインビジュアル */}
      <Box
        sx={{
          width: "100%", // 幅を100%に設定
          height: "600px", // 固定の高さ
          backgroundImage: {
            xs: `url(${resMainvisual})`,
            md: `url(${mainvisual})`,
          },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* News */}
      <Box
        sx={{
          padding: { xs: "80px 16px", md: "120px 200px" },
          backgroundColor: "#F0F0F0",
        }}
      >
        <Typography
          sx={{ fontSize: "36px", fontFamily: "Arial", letterSpacing: "0.3em" }}
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

        {/* ニュース内のコンテンツの大枠 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
          }}
        >
          {/* ニュース内のコンテンツインナー1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginBottom: { xs: "40px", md: "0" },
            }}
          >
            {/* 年月日 */}
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
                2021.01.01
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
                NEWS
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "16px", fontFamily: "Arial" }}>
              タイトルタイトルタイトルタイトル
            </Typography>
          </Box>
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

          {/* ニュース内のコンテンツインナー2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginBottom: { xs: "40px", md: "0" },
            }}
          >
            {/* 年月日 */}
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
                2021.01.01
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Arial",
                  color: "#FFFFFF",
                  backgroundColor: "#000000",
                  padding: "3px 4px 3px 5px",
                }}
              >
                PRESS
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "16px", fontFamily: "Arial" }}>
              タイトルタイトルタイトルタイトル
            </Typography>
          </Box>
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

          {/* ニュース内のコンテンツインナー3 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginBottom: { xs: "40px", md: "0" },
            }}
          >
            {/* 年月日 */}
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
                2021.01.01
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
                NEWS
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "16px", fontFamily: "Arial" }}>
              タイトルタイトルタイトルタイトル
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* About(多分グリッド) */}
      <Grid container sx={{ backgroundColor: "#F0F0F0" }}>
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
          <Typography
            sx={{ fontSize: "14px", fontFamily: "Arial", lineHeight: "30.8px" }}
          >
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontFamily: "Arial", lineHeight: "30.8px" }}
          >
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontFamily: "Arial", lineHeight: "30.8px" }}
          >
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Typography>
        </Grid>
      </Grid>

      {/* ビジネス */}
      <Box
        sx={{
          padding: { xs: "0 16px", md: "0 200px 185px 200px" },
          backgroundColor: "#F0F0F0",
        }}
      >
        <Box
          sx={{
            padding: { xs: "80px 0", md: "120px 0" },
          }}
        >
          {/* ビジネスの文字部分 */}
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

          {/* 画像とテキストの塊 */}
          <Grid container justifyContent="center" sx={{ columnGap: "64px" }}>
            {/* 左側の画像とテキスト */}
            <Grid
              item
              xs={12}
              md="auto"
              sx={{ marginTop: { xs: "0", md: "112px" } }}
            >
              {/* 1つ目のブロック */}
              <Box sx={{ marginBottom: { xs: "30px", md: "40px" } }}>
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
                    Web制作・マーケティング
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: "343px", md: "368px" },
                    height: "232px",
                    backgroundImage: {
                      xs: `url(${resBusiness1})`,
                      md: `url(${business1})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
              </Box>

              {/* 2つ目のブロック */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginTop: { xs: "30px", md: "0" },
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
                    インターネットメディア事業
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: "343px", md: "368px" },
                    height: "232px",
                    backgroundImage: {
                      xs: `url(${resBusiness2})`,
                      md: `url(${business2})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
              </Box>
            </Grid>

            {/* 右側の画像とテキスト */}
            <Grid
              item
              xs={12}
              md="auto"
              sx={{ marginTop: { xs: "30px", md: "0" } }}
            >
              {/* 1つ目のブロック */}
              <Box sx={{ marginBottom: { xs: "30px", md: "40px" } }}>
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
                    プロモーション企画・制作
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: "343px", md: "368px" },
                    height: "232px",
                    backgroundImage: {
                      xs: `url(${resBusiness3})`,
                      md: `url(${business3})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
              </Box>

              {/* 2つ目のブロック */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginTop: { xs: "30px", md: "0" },
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
                    ソーシャル企画・運営
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: "343px", md: "368px" },
                    height: "232px",
                    backgroundImage: {
                      xs: `url(${resBusiness4})`,
                      md: `url(${business4})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* カンパニー */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            position: "relative",
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

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "flex-start",
                alignItems: { xs: "flex-start", md: "center" },
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginRight: { xs: "0", md: "43px" },
                }}
              >
                会社名
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginLeft: { xs: "14px", md: "0" },
                }}
              >
                ウェブエンターテイメントデザイン株式会社
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "flex-start",
                alignItems: { xs: "flex-start", md: "center" },
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginRight: { xs: "0", md: "43px" },
                }}
              >
                所在地
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginLeft: { xs: "14px", md: "0" },
                }}
              >
                東京都渋谷区桜丘町99-9 West Building 3F
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "flex-start",
                alignItems: { xs: "flex-start", md: "center" },
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginRight: { xs: "0", md: "57px" },
                }}
              >
                代表
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginLeft: { xs: "14px", md: "0" },
                }}
              >
                ＸＸＸＸＸＸ
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "flex-start",
                alignItems: { xs: "flex-start", md: "center" },
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginRight: { xs: "0", md: "57px" },
                }}
              >
                設立
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginLeft: { xs: "14px", md: "0" },
                }}
              >
                2021年1月1日
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "flex-start",
                alignItems: { xs: "flex-start", md: "center" },
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginRight: { xs: "0", md: "43px" },
                }}
              >
                資本金
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginLeft: { xs: "14px", md: "0" },
                }}
              >
                3,000,000円
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "flex-start",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  marginRight: { xs: "0", md: "29px" },
                }}
              >
                事業内容
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Arial",
                    marginLeft: { xs: "14px", md: "0" },
                  }}
                >
                  Web制作・マーケティング
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Arial",
                    marginLeft: { xs: "14px", md: "0" },
                  }}
                >
                  インターネットメディア事業
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Arial",
                    marginLeft: { xs: "14px", md: "0" },
                  }}
                >
                  プロモーション企画・制作
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Arial",
                    marginLeft: { xs: "14px", md: "0" },
                  }}
                >
                  ソーシャル企画・運営
                </Typography>
              </Box>
            </Box>
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
            T/99-9999-9999
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
  );
};

export default Task10;
