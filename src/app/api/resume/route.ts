import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PDFDocument } from "pdf-lib";

export async function GET() {
  try {
    const imagePath = path.join(process.cwd(), "public", "resume.png");
    const imageBytes = fs.readFileSync(imagePath);

    const pdfDoc = await PDFDocument.create();
    const image = await pdfDoc.embedPng(imageBytes);

    const { width, height } = image.scale(1);
    const page = pdfDoc.addPage([width, height]);
    page.drawImage(image, { x: 0, y: 0, width, height });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Muhammad_Asif_Shahzad_Resume.pdf"',
        "Content-Length": pdfBytes.length.toString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
