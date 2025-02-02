import axios, { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_API_URL = "https://api.web3forms.com";
const WEB3FORMS_API_KEY = process.env.WEB3FORMS_API_KEY || "";

const axiosInstance = axios.create({
  baseURL: WEB3FORMS_API_URL,
});

const EMAIL_SUBJECT = "New message from Katrin's Studio";

const buildRequestBody = (data: any) => ({
  ...data,
  subject: EMAIL_SUBJECT,
  access_key: WEB3FORMS_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const res = await axiosInstance.post("/submit", buildRequestBody(json));

    return NextResponse.json(res.data, { status: HttpStatusCode.Ok });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message },
      { status: error?.status },
    );
  }
}
