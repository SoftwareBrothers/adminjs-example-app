import { Request, Response } from 'express';
import AdminJS from 'adminjs';
import Login, { LoginProps } from '../../../admin/views/components/login';
import { getHtml } from '../../../admin/views/get-html';

export class ViewController {
  private _admin: AdminJS;

  constructor(admin: AdminJS) {
    this._admin = admin;
  }

  async serveLogin(props: LoginProps) {
    const html = await getHtml(this._admin, Login, props);
    return (_request: Request, response: Response) => response.send(html);
  }
}
