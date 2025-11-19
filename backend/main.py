from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class FormData(BaseModel):
    type: str
    data: dict

app = FastAPI(title="Landing Page API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/api/submit")
async def submit(form: FormData):
    # Aqui você pode validar, persistir em DB ou enfileirar o payload
    # Por enquanto apenas retornamos o mesmo payload como confirmação
    return {"status": "received", "payload": form.dict()}
