# 個人網站（GitHub Pages）

這是一個可直接部署到 GitHub Pages 的靜態網站，採用簡約分頁版型，包含：
- 固定式導覽列（`About`、`Projects`）
- 右上搜尋放大鏡與內容搜尋
- 右上月亮 / 太陽圖示切換深色模式
- About 分頁（個人介紹、工作經歷、學歷）
- Projects 分頁（僅顯示專案）

## 檔案結構
- `index.html`：頁面結構
- `styles.css`：版面與視覺
- `script.js`：搜尋互動
- `assets/profile.jpg`：個人照片（請自行放入）

## 你要改的內容
1. 把 `assets/profile.jpg` 換成你的照片（建議正方形）
2. 修改 `index.html` 內文：
   - 自介、擅長領域
   - 工作經歷
   - 學歷
   - 專案資訊與連結

## 部署到 GitHub Pages
1. 在 GitHub 建立新 repo（例如 `roger-portfolio`）
2. 在本機進入此資料夾後執行：

```bash
git init
git add .
git commit -m "feat: initial personal site"
git branch -M main
git remote add origin https://github.com/<你的帳號>/roger-portfolio.git
git push -u origin main
```

3. push 完後，GitHub Actions 會自動部署
4. 到 GitHub Repo：`Settings` -> `Pages`
5. 如果你看到的是 `Custom domain` 輸入框，先不用填，這代表你目前看到的是自訂網域區塊，不是部署來源設定
6. 到 Repo 的 `Actions` 頁面，確認 `Deploy GitHub Pages` workflow 有成功跑完
7. 第一次部署成功後，網站會出現在：
   - `https://<你的帳號>.github.io/roger-portfolio/`

## 如果 Settings / Pages 沒看到 Build and deployment
- 現在很多 repo 會直接使用 GitHub Actions 部署，不一定會顯示你原本看到的舊版 `Deploy from a branch` 設定方式
- 這個專案已經改成使用 `.github/workflows/deploy-pages.yml` 自動部署
- 你只需要把程式 push 到 `main`，然後去 `Actions` 看部署是否成功
- `Custom domain` 只有在你有自己的網域時才需要填，沒有的話留白即可

## 自訂網域（可選）
如果你有網域，可在 `Settings` -> `Pages` 設定 Custom domain。
