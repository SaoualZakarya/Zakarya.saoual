import { client } from "./sanity";

// Fetch blogs
export async function getBlogs() {
  try {
    const query = `*[_type == "blog"] | order(title asc){
      title,
      content,
      image
    }`;
    const blogs = await client.fetch(query);
    console.log("Fetched blogs:", blogs);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return []; // Return an empty array on error
  }
}

// Fetch education
export async function getEducation() {
  try {
    const query = `*[_type == "education"] | order(year asc){
      school,
      year,
      desc 
    }`;
    const education = await client.fetch(query);
    console.log("Fetched education data:", education);
    return education;
  } catch (error) {
    console.error('Error fetching education:', error);
    return []; // Return an empty array on error
  }
}

// Fetch tools and languages
export async function getToolsAndLanguages() {
  try {
    const query = `*[_type == "language_tool"] | order(title asc){
      src,
      title
    }`;
    const toolLang = await client.fetch(query);
    console.log("Fetched tools and languages:", toolLang);
    return toolLang;
  } catch (error) {
    console.error('Error fetching tools and languages:', error);
    return []; // Return an empty array on error
  }
}

// Fetch projects
export async function getProjects() {
  try {
    const query = `*[_type == "project"] | order(title asc){
      title,
      img,
      description,
      techUsedLogo,
      githubLinkFront,
      githubLinkBack,
      demoLink
    }`;
    const projects = await client.fetch(query);
    console.log("Fetched projects:", projects);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; // Return an empty array on error
  }
}

// Fetch certificates
export async function getCertificate() {
  try {
    const query = `*[_type == "certificate"] | order(title desc){
      src,
      link,
      title
    }`;
    const certificates = await client.fetch(query);
    console.log("Fetched certificates:", certificates);
    return certificates;
  } catch (error) {
    console.error('Error fetching certificates:', error);
    return []; // Return an empty array on error
  }
}
