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

3. 到 GitHub Repo：`Settings` -> `Pages`
4. `Build and deployment` 選 `Deploy from a branch`
5. Branch 選 `main`，資料夾選 `/ (root)`，按 Save
6. 等待 1-3 分鐘後，你的網站會出現在：
   - `https://<你的帳號>.github.io/roger-portfolio/`

## 自訂網域（可選）
如果你有網域，可在 `Settings` -> `Pages` 設定 Custom domain。
