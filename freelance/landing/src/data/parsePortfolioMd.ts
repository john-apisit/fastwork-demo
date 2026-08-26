export function parsePortfolioMd(content: string): {
  title: string
  description: string
  tags: string[]
} {
  const lines = content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  const detailMarkers = ['รายละเอียดโครงการ', 'ภาพรวมโครงการ']
  const stopMarkers = ['ฟีเจอร์หลัก', 'ผลลัพธ์', 'เทคโนโลยี']

  let startIdx = 0
  while (startIdx < lines.length && lines[startIdx].startsWith('ตัวอย่างผลงาน')) {
    startIdx++
  }

  const title = lines[startIdx] ?? ''

  let description = ''
  const detailIdx = lines.findIndex((line) => detailMarkers.includes(line))
  if (detailIdx >= 0 && detailIdx + 1 < lines.length) {
    description = lines[detailIdx + 1]
  } else {
    const titleIdx = lines.indexOf(title)
    const nextLine = titleIdx >= 0 ? lines[titleIdx + 1] : undefined
    if (nextLine && !detailMarkers.includes(nextLine) && !stopMarkers.includes(nextLine)) {
      description = nextLine
    }
  }

  const tags: string[] = []
  const techIdx = lines.findIndex((line) => line === 'เทคโนโลยี' || line.startsWith('เทคโนโลยี'))
  if (techIdx >= 0) {
    for (let i = techIdx + 1; i < lines.length; i++) {
      const line = lines[i]
      if (stopMarkers.includes(line) || line.startsWith('ตัวอย่าง')) break
      const tag = line.replace(/^-\s*/, '').trim()
      if (tag) tags.push(tag)
    }
  }

  return { title, description, tags }
}

export function projectImages(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, '0')
    return `/images/projects/${folder}/${number}.png`
  })
}
