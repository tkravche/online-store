// vite.config.ts
import react from "file:///D:/GoIT/Projects/challenge/online-store/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///D:/GoIT/Projects/challenge/online-store/node_modules/vite/dist/node/index.js";
import macrosPlugin from "file:///D:/GoIT/Projects/challenge/online-store/node_modules/vite-plugin-babel-macros/dist/plugin.js";
import ViteImagemin from "file:///D:/GoIT/Projects/challenge/online-store/node_modules/vite-plugin-imagemin/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\GoIT\\Projects\\challenge\\online-store";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 80
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    }),
    macrosPlugin()
  ],
  base: "/online-store/",
  server: {
    port: 3e3
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  json: {
    namedExports: true
  },
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled"]
  },
  build: {
    sourcemap: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHb0lUXFxcXFByb2plY3RzXFxcXGNoYWxsZW5nZVxcXFxvbmxpbmUtc3RvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEdvSVRcXFxcUHJvamVjdHNcXFxcY2hhbGxlbmdlXFxcXG9ubGluZS1zdG9yZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR29JVC9Qcm9qZWN0cy9jaGFsbGVuZ2Uvb25saW5lLXN0b3JlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgbWFjcm9zUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWJhYmVsLW1hY3Jvcyc7XHJcbmltcG9ydCBWaXRlSW1hZ2VtaW4gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2VtaW4nO1xyXG5cclxuLy8gVGhlIG1pbmlmaWVycyB5b3Ugd2FudCB0byB1c2U6XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlSW1hZ2VtaW4oe1xyXG4gICAgICBnaWZzaWNsZToge1xyXG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxyXG4gICAgICAgIGludGVybGFjZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpcG5nOiB7XHJcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vempwZWc6IHtcclxuICAgICAgICBxdWFsaXR5OiA4MCxcclxuICAgICAgfSxcclxuICAgICAgcG5ncXVhbnQ6IHtcclxuICAgICAgICBxdWFsaXR5OiBbMC44LCAwLjldLFxyXG4gICAgICAgIHNwZWVkOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICBzdmdvOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlVmlld0JveCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIG1hY3Jvc1BsdWdpbigpLFxyXG4gIF0sXHJcblxyXG4gIGJhc2U6ICcvb25saW5lLXN0b3JlLycsXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AvJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGpzb246IHtcclxuICAgIG5hbWVkRXhwb3J0czogdHJ1ZSxcclxuICB9LFxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgaW5jbHVkZTogWydAZW1vdGlvbi9yZWFjdCcsICdAZW1vdGlvbi9zdHlsZWQnXSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlULE9BQU8sV0FBVztBQUNuVSxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxrQkFBa0I7QUFKekIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ1IsbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBRUEsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxLQUFLLFFBQVEsa0NBQVcsS0FBSyxDQUFDO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxrQkFBa0IsaUJBQWlCO0FBQUEsRUFDL0M7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxFQUNiO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
