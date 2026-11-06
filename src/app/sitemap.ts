import { MetadataRoute } from "next";
import { SITE, RENO_PRODUCTS } from "@/config/site";
import { projectsData } from "@/config/projects";
import { BLOG_ARTICLES } from "@/config/blog";

const RELEASE_DATE = "2026-05-31T00:00:00.000Z";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const staticRoutes = [
    "",
    "/sobre",
    "/solucoes",
    "/integradores",
    "/projetos",
    "/blog",
    "/contato",
    "/privacidade",
    "/cookies",
    "/termos",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: RELEASE_DATE,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : route === "/solucoes" || route === "/integradores" ? 0.9 : 0.8,
  }));

  const serviceRoutes = RENO_PRODUCTS.map((prod) => ({
    url: `${baseUrl}/solucoes/${prod.slug}`,
    lastModified: RELEASE_DATE,
    changeFrequency: "monthly" as const,
    priority: prod.slug === "reno-adviser" ? 0.95 : 0.9,
  }));

  const projectRoutes = projectsData.map((prj) => ({
    url: `${baseUrl}/projetos/${prj.slug}`,
    lastModified: RELEASE_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogRoutes = BLOG_ARTICLES.map((art) => ({
    url: `${baseUrl}/blog/${art.slug}`,
    lastModified: `${art.publishedAt}T00:00:00.000Z`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
