import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@layout/DashboardLayout/DashboardLayout";
import PublicLayout from "@layout/PublicLayout/PublicLayout";
import LandingPage from "../pages/LandingPage/LandingPage";

//Lazy Import
const Login = lazy(() => import("@pages/Auth/Login"));
const SignUp = lazy(() => import("@pages/Auth/SignUp"));
const ForgetPass = lazy(() => import("@pages/Auth/ForgetPass"));
const FromText = lazy(() => import("@pages/ArtGenerator/FromText"));
const ImageRemix = lazy(() => import("@pages/ArtGenerator/ImageRemix"));
const Pricing = lazy(() => import("@pages/Pricing/Pricing"));
const Profile = lazy(() => import("@pages/profile/Profile"));
const Dashboard = lazy(
  () => import("@components/Dashboard/MainPanel/MainPanel"),
);
const NotFound = lazy(() => import("@pages/NotFound/NotFound"));
const PromptGenerator = lazy(
  () => import("@pages/ArtGenerator/PromptGenerator"),
);

// const PictroMagic = lazy(() => import('@pages/PictroMagic'));
// const PictroAIStudio = lazy(() => import('@pages/PictroAIStudio'));
// const AIArtGenerator = lazy(() => import('@pages/AIArtGenerator'));
// const ArtGenerator = lazy(() => import('@pages/ArtGenerator'));
// const TextToPrompt = lazy(() => import('@pages/TextToPrompt'));
// const ImageToPrompt = lazy(() => import('@pages/ImageToPrompt'));

const MainRoutes = () => {
  const routes = [
    { path: "dashboard", element: <Dashboard /> },
    { path: "pictro-magic", element: <Dashboard /> },
    { path: "pictro-ai-studio", element: <Dashboard /> },
    { path: "ai-art-generator", element: <Dashboard /> },
    { path: "prompt-generator", element: <PromptGenerator /> },
    { path: "art-generator", element: <FromText /> },
    { path: "image-to-prompt", element: <Dashboard /> },
    { path: "image-remix", element: <ImageRemix /> },
    { path: "amine-creator", element: <Dashboard /> },
    { path: "Disney-Creator", element: <Dashboard /> },
    { path: "Avatar-Maker", element: <Dashboard /> },
    { path: "Cartoon-Creator", element: <Dashboard /> },
    { path: "Face-Swap", element: <Dashboard /> },
    { path: "Artist-AI", element: <Dashboard /> },
    { path: "Image-Inpaint", element: <Dashboard /> },
    { path: "Pictro-Fantasy", element: <Dashboard /> },
    { path: "Sketch-to-Art", element: <Dashboard /> },
    { path: "Trending", element: <Dashboard /> },
    { path: "Art-Collections", element: <Dashboard /> },
    { path: "Customer-Support", element: <Dashboard /> },
    { path: "Help", element: <Dashboard /> },
    { path: "whats-new", element: <Dashboard /> },
    { path: "Pictro-API", element: <Dashboard /> },
    { path: "History", element: <Dashboard /> },
    { path: "Pictro-Mobile-App", element: <Dashboard /> },
    { path: "AI-Music-Generator", element: <Dashboard /> },
    { path: "AI-Photo-Labz", element: <Dashboard /> },
    { path: "GPT-Law-Assistant", element: <Dashboard /> },
    { path: "Report-issue", element: <Dashboard /> },
    { path: "Settings", element: <Dashboard /> },
    { path: "Send-feedback", element: <Dashboard /> },
    { path: "Pricing", element: <Pricing /> },
    { path: "Profile", element: <Profile /> },
  ];

  return (
    <>
      <Routes>
        <Route path="/" exact element={<PublicLayout />}>
          <Route path="login" exact element={<Login />} />
          <Route path="signup" exact element={<SignUp />} />
          <Route path="forget-password" exact element={<ForgetPass />} />
          <Route index exact element={<Login />} />
        </Route>
        {/* protected layout */}
        <Route path="/" exact element={<DashboardLayout />}>
          {routes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
