
import { GoogleGenAI, Type } from "@google/genai";
import { VideoProject } from "./types";

const MODEL_NAME = 'gemini-3-pro-preview';

export const generateVideoPlan = async (topic: string): Promise<VideoProject> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Bạn là AI chuyên gia tạo VIDEO SHORTS để BÁN HÀNG – DRAMA – KỂ CHUYỆN.
    Chủ đề: "${topic}"

    Hãy thực hiện các bước sau:
    BƯỚC 1: Tạo 1 NHÂN VẬT CHÍNH DUY NHẤT (Mô tả chi tiết ngoại hình, trang phục, cảm xúc). Nhân vật này phải nhất quán xuyên suốt.
    BƯỚC 2: Viết kịch bản video Shorts (khoảng 32–64 giây).
    BƯỚC 3: Chia thành các phân cảnh, mỗi cảnh dài 8 giây.
    BƯỚC 4: Với mỗi cảnh, viết mô tả hành động, prompt tạo ẢNH (tỉ lệ 9:16) và prompt tạo VIDEO (8s).

    Yêu cầu quan trọng: Prompts cho ảnh/video phải cực kỳ chi tiết bằng tiếng Anh để các AI tạo hình ảnh/video hiểu rõ nhất, nhưng vẫn giữ đúng mô tả nhân vật đã thiết lập.
  `;

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          topic: { type: Type.STRING },
          character: {
            type: Type.OBJECT,
            properties