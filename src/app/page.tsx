import React, { Fragment } from "react";
import Image from 'next/image';

const EMO_CHANGE_ROWS = [
  {
    emotion: "Angry → Calm",
    items: [
      {
        index: "(a)",
        ref: "audio/emochange_ref/F_spk_02-angrycalm.wav",
        results: [
          "audio/emochange_results/voicebox/F_spk_02-angrycalm.wav",
          "audio/emochange_results/elate/F_spk_02-angrycalm.wav",
          "audio/emochange_results/emoctrl/F_spk_02-angrycalm.wav",
          "audio/emochange_results/f5-tts/F_spk_02-angrycalm.wav",
          "audio/emochange_results/ours/F_spk_02-angrycalm.wav",
        ],
      },
      {
        index: "(b)",
        ref: "audio/emochange_ref/M_spk_01-angrycalm.wav",
        results: [
          "audio/emochange_results/voicebox/M_spk_01-angrycalm.wav",
          "audio/emochange_results/elate/M_spk_01-angrycalm.wav",
          "audio/emochange_results/emoctrl/M_spk_01-angrycalm.wav",
          "audio/emochange_results/f5-tts/M_spk_01-angrycalm.wav",
          "audio/emochange_results/ours/M_spk_01-angrycalm.wav",
        ],
      },
    ],
  },
  {
    emotion: "Sad → Surprised",
    items: [
      {
        index: "(a)",
        ref: "audio/emochange_ref/F_spk_20-sadsurprised.wav",
        results: [
          "audio/emochange_results/voicebox/F_spk_20-sadsurprised.wav",
          "audio/emochange_results/elate/F_spk_20-sadsurprised.wav",
          "audio/emochange_results/emoctrl/F_spk_20-sadsurprised.wav",
          "audio/emochange_results/f5-tts/F_spk_20-sadsurprised.wav",
          "audio/emochange_results/ours/F_spk_20-sadsurprised.wav",
        ],
      },
      {
        index: "(b)",
        ref: "audio/emochange_ref/M_spk_01-sadsurprised.wav",
        results: [
          "audio/emochange_results/voicebox/M_spk_01-sadsurprised.wav",
          "audio/emochange_results/elate/M_spk_01-sadsurprised.wav",
          "audio/emochange_results/emoctrl/M_spk_01-sadsurprised.wav",
          "audio/emochange_results/f5-tts/M_spk_01-sadsurprised.wav",
          "audio/emochange_results/ours/M_spk_01-sadsurprised.wav",
        ],
      },
    ],
  },
  {
    emotion: "Happy → Disgusted",
    items: [
      {
        index: "(a)",
        ref: "audio/emochange_ref/F_spk_06-happydisgusted.wav",
        results: [
          "audio/emochange_results/voicebox/F_spk_06-happydisgusted.wav",
          "audio/emochange_results/elate/F_spk_06-happydisgusted.wav",
          "audio/emochange_results/emoctrl/F_spk_06-happydisgusted.wav",
          "audio/emochange_results/f5-tts/F_spk_06-happydisgusted.wav",
          "audio/emochange_results/ours/F_spk_06-happydisgusted.wav",
        ],
      },
      {
        index: "(b)",
        ref: "audio/emochange_ref/M_spk_03-happydisgusted.wav",
        results: [
          "audio/emochange_results/voicebox/M_spk_03-happydisgusted.wav",
          "audio/emochange_results/elate/M_spk_03-happydisgusted.wav",
          "audio/emochange_results/emoctrl/M_spk_03-happydisgusted.wav",
          "audio/emochange_results/f5-tts/M_spk_03-happydisgusted.wav",
          "audio/emochange_results/ours/M_spk_03-happydisgusted.wav",
        ],
      },
    ],
  },
  {
    emotion: "Calm → Fearful",
    items: [
      {
        index: "(a)",
        ref: "audio/emochange_ref/F_spk_22-calmfearful.wav",
        results: [
          "audio/emochange_results/voicebox/F_spk_22-calmfearful.wav",
          "audio/emochange_results/elate/F_spk_22-calmfearful.wav",
          "audio/emochange_results/emoctrl/F_spk_22-calmfearful.wav",
          "audio/emochange_results/f5-tts/F_spk_22-calmfearful.wav",
          "audio/emochange_results/ours/F_spk_22-calmfearful.wav",
        ],
      },
      {
        index: "(b)",
        ref: "audio/emochange_ref/M_spk_11-calmfearful.wav",
        results: [
          "audio/emochange_results/voicebox/M_spk_11-calmfearful.wav",
          "audio/emochange_results/elate/M_spk_11-calmfearful.wav",
          "audio/emochange_results/emoctrl/M_spk_11-calmfearful.wav",
          "audio/emochange_results/f5-tts/M_spk_11-calmfearful.wav",
          "audio/emochange_results/ours/M_spk_11-calmfearful.wav",
        ],
      },
    ],
  },
];



const JVNV_EMOTIONS = [
  "happy",
  "sad",
  "angry",
  "surprised",
  "disgusted",
  "fearful",
];
const JVNV_SPEAKERS = [
  { code: "F1", label: "(a)" },
  { code: "M1", label: "(b)" },
];
const JVNV_MODELS = [
  { key: "seamless", label: "SeamlessExpressive" },
  { key: "voicebox", label: "Voicebox(*)" },
  { key: "elate", label: "ELaTE(*)" },
  { key: "emoctrl", label: "EmoCtrl-TTS(*)" },
  { key: "f5-tts", label: "F5-TTS(**)" },
  { key: "ours", label: "Ours(**)" },
];

const Home = () => (
  <div className="min-h-screen bg-white font-sans antialiased">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="text-center mb-16 sm:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 transition-colors duration-200 hover:text-blue-700 tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-transparent">
          TTS-CtrlNet: Time varying emotion aligned text-to-speech generation with ControlNet
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-3 sm:mb-4 leading-relaxed max-w-3xl mx-auto tracking-wide px-4">
          Time varying emotion aligned text-to-speech generation with controlnet
        </p>
      </header>

      {/* Authors */}
      <section className="mb-20 sm:mb-24" aria-labelledby="authors-title">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10 transition-all duration-200 hover:shadow-md">
          <h2 id="authors-title" className="sr-only">Authors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 tracking-wide mb-1">Jaeseok Jeong</h3>
            <p className="text-sm text-gray-700 tracking-wide mb-1">Yonsei University</p>
                          <a 
                href="mailto:jete_jeong@yonsei.ac.kr" 
                className="text-xs text-blue-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded"
              >
                jete_jeong@yonsei.ac.kr
              </a>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 tracking-wide mb-1">Yuna Lee</h3>
            <p className="text-sm text-gray-700 tracking-wide mb-1">KT Corporation</p>
            <a 
              href="mailto:yu-na.lee@kt.com" 
              className="text-xs text-blue-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded"
            >
              yu-na.lee@kt.com
            </a>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 tracking-wide mb-1">Mingi Kwon</h3>
            <p className="text-sm text-gray-700 tracking-wide mb-1">Yonsei University</p>
            <a 
              href="mailto:kwonmingi@yonsei.ac.kr" 
              className="text-xs text-blue-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded"
            >
              kwonmingi@yonsei.ac.kr
            </a>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 tracking-wide mb-1">Youngjung Uh</h3>
            <p className="text-sm text-gray-700 tracking-wide mb-1">Yonsei University</p>
            <a 
              href="mailto:yj.uh@yonsei.ac.kr" 
              className="text-xs text-blue-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded"
            >
              yj.uh@yonsei.ac.kr
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="mb-20 sm:mb-24" aria-labelledby="abstract-title">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10 transition-all duration-200 hover:shadow-md">
          <div className="max-w-4xl mx-auto">
          <h2 id="abstract-title" className="text-2xl sm:text-3xl font-bold mb-6 transition-colors duration-200 hover:text-blue-700 tracking-tight leading-tight bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
            Abstract
          </h2>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-l-4 border-blue-200 p-6 sm:p-8 rounded-r-sm">
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide text-justify">
                Recent advances in text-to-speech (TTS) have enabled natural speech synthesis, but fine-grained, time-varying emotion control remains challenging. Existing methods often allow only utterance-level control, require full model fine-tuning with a large emotion speech dataset, which can degrade performance. Inspired by <span className="text-blue-600 font-medium">Zhang et al. (2023)</span>, we propose the first ControlNet-based approach for controlling flow-matching TTS (<span className="text-blue-600 font-semibold">TTS-CtrlNet</span>), which freezes the original model and makes a trainable copy of it to process additional condition. We show that TTS-CtrlNet can boost the pretrained large TTS model by adding intuitive, scalable, and time-varying emotion control while inheriting the ability of the original model (e.g., zero-shot voice cloning & naturalness). Furthermore, we provide practical recipes for adding emotion control: <span className="text-blue-600 font-medium">1) optimal architecture design choice with block analysis, 2) emotion-specific flow step, and 3) flexible control scale</span>.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide text-justify mt-4">
                Experiments show that ours can effectively adds an emotion controller to existing TTS, and achieves <span className="text-blue-600 font-semibold">state-of-the-art performance</span> with emotion similarity scores: <span className="text-blue-600 font-medium">Emo-SIM and Aro-Val SIM</span>. We will make the code publicly available.
              </p>
          </div>
        </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-20 sm:mb-24" aria-labelledby="architecture-title">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10 transition-all duration-200 hover:shadow-md">
          <div className="max-w-3xl mx-auto">
            <h2 id="architecture-title" className="text-2xl sm:text-3xl font-bold mb-6 transition-colors duration-200 hover:text-blue-700 tracking-tight leading-tight text-center bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              Architecture
            </h2>
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/architecture.png"
                  alt="TTS-CtrlNet architecture diagram showing the ControlNet-based approach for flow-matching TTS with emotion control"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-lg shadow-sm transition-all duration-200 hover:shadow-md border border-blue-50"
                  priority
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide">
                <strong className="text-blue-600">Overview of TTS-CtrlNet:</strong> Controlling signal is processed through ControlNet and fed into the subset of blocks in original model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-gradient-to-r from-gray-300 via-blue-200 to-gray-300 my-16 sm:my-20 transition-colors duration-200 hover:border-blue-300" aria-hidden="true" />

      {/* EMO-Change */}
      <section className="mb-20 sm:mb-24" aria-labelledby="emo-change-title">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10 transition-all duration-200 hover:shadow-md">
          <div className="mb-8 sm:mb-10">
            <h2 id="emo-change-title" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 transition-colors duration-200 hover:text-blue-700 tracking-tight leading-tight bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              EMO-Change
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl tracking-wide">
              A reference audio was constructed by concatenating two speech samples, each expressing a different emotion, 
              to explicitly include multiple emotional cues within a single utterance.
            </p>
          </div>
          
          <div className="relative">
            <div 
              className="overflow-x-auto border border-gray-300 rounded-sm transition-all duration-200 hover:border-blue-300 hover:shadow-sm scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100 focus-within:ring-2 focus-within:ring-blue-300 focus-within:ring-opacity-50 focus-within:outline-none"
              role="region"
              aria-label="EMO-Change audio comparison table"
              tabIndex={0}
            >
              <div className="min-w-[800px] sm:min-w-0">
                <table className="w-full" role="table" aria-label="EMO-Change audio samples">
                  <thead>
                    <tr className="border-b border-gray-300 bg-gradient-to-r from-gray-100 to-blue-50">
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 tracking-wide text-sm sm:text-base">Emotion</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 tracking-wide text-sm sm:text-base">Gender</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 tracking-wide text-sm sm:text-base">Audio Prompt</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 tracking-wide text-sm sm:text-base">Voicebox</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 tracking-wide text-sm sm:text-base">ELaTE</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 tracking-wide text-sm sm:text-base">EmoCtrl-TTS</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 tracking-wide text-sm sm:text-base">F5-TTS</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 tracking-wide text-sm sm:text-base">Ours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EMO_CHANGE_ROWS.map((row) => (
                      <Fragment key={row.emotion}>
                        {row.items.map((item, j) => (
                          <tr 
                            key={item.index} 
                            className="border-b border-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200 hover:shadow-sm group"
                          >
                            {j === 0 && (
                              <th scope="row" rowSpan={2} className="p-4 sm:p-6 font-medium text-gray-900 align-top transition-colors duration-200 group-hover:text-blue-700 tracking-wide text-sm sm:text-base">
                                {row.emotion}
                              </th>
                            )}
                            <td className="p-4 sm:p-6 text-gray-800 transition-colors duration-200 group-hover:text-gray-900 tracking-wide text-sm sm:text-base">
                              {item.index === "(a)" ? "Female" : "Male"}
                            </td>
                            <td className="p-4 sm:p-6">
                              <audio 
                                controls 
                                src={item.ref} 
                                className="w-28 sm:w-32 md:w-36 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50" 
                                preload="none"
                                aria-label={`Audio prompt for ${row.emotion} ${item.index === "(a)" ? "female" : "male"} sample`}
                              />
                            </td>
                            {item.results.map((src, index) => (
                              <td key={src} className="p-4 sm:p-6">
                                <audio 
                                  controls 
                                  src={src} 
                                  className="w-28 sm:w-32 md:w-36 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50" 
                                  preload="none"
                                  aria-label={`${['Voicebox', 'ELaTE', 'EmoCtrl-TTS', 'F5-TTS', 'Ours'][index]} result for ${row.emotion} ${item.index === "(a)" ? "female" : "male"} sample`}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Scroll indicator for mobile */}
            <div className="sm:hidden mt-2 text-center">
              <div className="inline-flex items-center text-xs text-blue-600" role="note" aria-label="Table scroll instruction">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Scroll to see more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-gradient-to-r from-gray-300 via-blue-200 to-gray-300 my-16 sm:my-20 transition-colors duration-200 hover:border-blue-300" aria-hidden="true" />

      {/* JVNV S2ST */}
      <section className="mb-20 sm:mb-24" aria-labelledby="jvnv-s2st-title">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10 transition-all duration-200 hover:shadow-md">
          <div className="mb-8 sm:mb-10">
            <h2 id="jvnv-s2st-title" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 transition-colors duration-200 hover:text-blue-700 tracking-tight leading-tight bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              JVNV S2ST
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl tracking-wide">
              Japanese-to-English speech-to-speech translation
            </p>
          </div>
          
          <div className="relative">
            <div 
              className="overflow-x-auto border border-gray-300 rounded-sm transition-all duration-200 hover:border-blue-400 hover:shadow-sm scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-opacity-50 focus-within:outline-none"
              role="region"
              aria-label="JVNV S2ST audio comparison table"
              tabIndex={0}
            >
              <div className="min-w-[900px] sm:min-w-0">
                <table className="w-full" role="table" aria-label="JVNV S2ST audio samples">
                  <thead>
                    <tr className="border-b border-gray-300 bg-gradient-to-r from-gray-100 to-blue-50">
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-900 tracking-wide text-sm sm:text-base">Emotion</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-900 tracking-wide text-sm sm:text-base">Speaker</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-900 tracking-wide text-sm sm:text-base">Reference</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-900 tracking-wide text-sm sm:text-base">SeamlessExpressive</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-900 tracking-wide text-sm sm:text-base">Voicebox(*)</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-900 tracking-wide text-sm sm:text-base">ELaTE(*)</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-900 tracking-wide text-sm sm:text-base">EmoCtrl-TTS(*)</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-900 tracking-wide text-sm sm:text-base">F5-TTS(**)</th>
                      <th scope="col" className="text-left p-4 sm:p-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-900 tracking-wide text-sm sm:text-base">Ours(**)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JVNV_EMOTIONS.map((emotion) => (
                      <Fragment key={emotion}>
                        {JVNV_SPEAKERS.map((spk, j) => (
                          <tr 
                            key={`${emotion}-${spk.code}`} 
                            className="border-b border-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200 hover:shadow-sm group"
                          >
                            {j === 0 && (
                              <th scope="row" rowSpan={2} className="p-4 sm:p-6 font-medium text-gray-900 align-top capitalize transition-colors duration-200 group-hover:text-blue-900 tracking-wide text-sm sm:text-base">
                                {emotion}
                              </th>
                            )}
                            <td className="p-4 sm:p-6 text-gray-800 transition-colors duration-200 group-hover:text-gray-900 tracking-wide text-sm sm:text-base">{spk.label}</td>
                            <td className="p-4 sm:p-6">
                              <audio
                                controls
                                src={`audio/jvnv_ref/JVNV_${spk.code}_${emotion}.wav`}
                                className="w-28 sm:w-32 md:w-36 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                                preload="none"
                                aria-label={`Reference audio for ${emotion} ${spk.label} speaker`}
                              />
                            </td>
                            {JVNV_MODELS.map((model) => (
                              <td key={model.key} className="p-4 sm:p-6">
                                <audio
                                  controls
                                  src={`audio/jvnv_results/${model.key}/JVNV_${spk.code}_${emotion}.wav`}
                                  className="w-28 sm:w-32 md:w-36 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                                  preload="none"
                                  aria-label={`${model.label} result for ${emotion} ${spk.label} speaker`}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Scroll indicator for mobile */}
            <div className="sm:hidden mt-2 text-center">
              <div className="inline-flex items-center text-xs text-blue-600" role="note" aria-label="Table scroll instruction">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Scroll to see more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      <footer className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10 transition-all duration-200 hover:shadow-md">
        <div className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2 tracking-wide" role="contentinfo" aria-label="Model training information">
          <p className="transition-colors duration-200 hover:text-blue-600">(*): Models trained on ESD dataset</p>
          <p className="transition-colors duration-200 hover:text-blue-600">(**): Models trained on ESD + JVNV dataset</p>
        </div>
      </footer>
    </div>
  </div>
);

export default Home;
