import { launchChromium } from 'playwright-aws-lambda'

const NODE_ENV = process.env.NODE_ENV || 'production'

export default async function PageToPDF(req, res) {
  const { path } = req.query
  const browser = await launchChromium({
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  const BASE_URL = NODE_ENV === 'production' ? 'https://dustinschau.com' : 'http://localhost:8000'

  await page.goto([BASE_URL, path].join(''));

  await page.emulateMedia({ media: 'print' });

  const buffer = await page.pdf({
    format: 'Letter'
  })

  await browser.close()

  return res.status(200).set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename=dustin-schau-resume.pdf' 
  }).send(buffer)
}
