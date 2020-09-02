declare module '@svgr/core' {
  async function convert(
    code: string,
    config: { [key: string]: string },
    state: {
      filePath?: string;
      componentName?: string;
      caller?: {
        name?: string;
        defaultPlugin?: any[];
        previousExport?: () => string;
      };
    }
  ): Promise<string>;

  export default convert;
}
