import { MetadataRoute } from "next";
import { servicesData } from "@/config/services";
import { projectsData } from "@/config/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://renovera-institucional.vercel.app";

  const staticRoutes = [
    "",
    "/sobre",
    "/solucoes",
    "/projetos",
    "/contato",
    "/privacidade",
    "/termos"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const serviceRoutes = servicesData.map((svc) => ({
    url: `${baseUrl}/solucoes/${svc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  const projectRoutes = projectsData.map((prj) => ({
    url: `${baseUrl}/projetos/${prj.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
