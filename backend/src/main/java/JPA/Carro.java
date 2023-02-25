package JPA;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Carro {
	@Id
	@GeneratedValue
	private Long id;
	private String nome;
	private String modelo;
	private Double preco ;


	public Carro() {

	}

	public Carro(Long id, String nome, String modelo, Double preco) {
		super();
		this.id = id;
		this.nome = nome;
		this.modelo = modelo;
		this.preco = preco;
	}

	public Long getId() {
		return id;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	@Override
	public String toString() {
		return "Carro{" +
				"id=" + id +
				", nome='" + nome + '\'' +
				", modelo='" + modelo + '\'' +
				", preco=" + preco +
				'}';
	}
}
