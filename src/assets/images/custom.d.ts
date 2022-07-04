declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.webp" {
  const value: any;
  export = value;
}
declare module "*.png" {
  const value: string;
  export default value;
}