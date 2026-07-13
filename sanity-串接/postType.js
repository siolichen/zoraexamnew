// =====================================================================
//  Sanity 文章結構：postType.js
//  放到你的 Sanity 專案資料夾  schemaTypes/postType.js
// =====================================================================
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: '文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: '分類標籤（例：策略思維／申論寫作／心態調整）',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: '網址代稱（slug）',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: '封面圖片 (Main Image)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'excerpt',
      title: '摘要（卡片／SEO 用，1～2 句）',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: '文章內文 (Content)',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'publishedAt',
      title: '發布日期 (Published At)',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {title: '最新發佈', name: 'publishedDesc', by: [{field: 'publishedAt', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'mainImage'},
  },
})
