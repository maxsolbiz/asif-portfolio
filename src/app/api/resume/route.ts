import { NextResponse } from "next/server";
import ReactPDF from "@react-pdf/renderer";
import ResumePDF from "@/lib/ResumePDF";
import React from "react";

export async function GET() {
  try {
    const stream = await ReactPDF.renderToStream(React.createElement(ResumePDF));

    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      stream.on("data", (chunk: Buffer) => chunks.push(chunk));
      stream.on("end", resolve);
      stream.on("error", reject);
    });

    const pdfBuffer = Buffer.concat(chunks);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Muhammad_Asif_Shahzad_Resume.pdf"',
        "Content-Length": pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
